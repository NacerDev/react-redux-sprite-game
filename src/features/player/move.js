import store from "../../config/store";
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from "../../config/constants";

export default function handleMove(player) {

    function getNewPosition(oldPos, direction) {

        // eslint-disable-next-line default-case
        switch (direction) {
            case 'WEST':
                return [oldPos[0] - SPRITE_SIZE, oldPos[1]]
            case 'EAST':
                return [oldPos[0] + SPRITE_SIZE, oldPos[1]]
            case 'NORTH':
                return [oldPos[0], oldPos[1] - SPRITE_SIZE]
            case 'SOUTH':
                return [oldPos[0], oldPos[1] + SPRITE_SIZE]

        }

    }

    function respectsImpassable(newPos) {
        const tiles = store.getState().map.tiles;
        const y = newPos[1] / SPRITE_SIZE, x = newPos[0] / SPRITE_SIZE
        const nextTile = tiles[y][x]

        return nextTile < 5
    }

    function respectsBoundries(newPos) {
        const horizantalBoundaries = newPos[0] >= 0 && newPos[0] <= MAP_WIDTH - SPRITE_SIZE;
        const verticalBoundaries = newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT - SPRITE_SIZE;
        return horizantalBoundaries && verticalBoundaries
    }


    function dispatchMove(newPos) {

        store.dispatch({
            type: 'MOVE_PLAYER',
            payload: {
                position: newPos

            }
        })
    }

    function attemptMove(direction) {
        const oldPos = store.getState().player.position
        const newPos = getNewPosition(oldPos, direction);

        if (respectsBoundries(newPos) && respectsImpassable(newPos))
            dispatchMove(newPos)
    }

    function handleKeyDown(e) {
        e.preventDefault()
        // eslint-disable-next-line default-case
        switch (e.keyCode) {
            case 37:
                return attemptMove('WEST')

            case 38:
                return attemptMove('NORTH')

            case 39:
                return attemptMove('EAST')

            case 40:
                return attemptMove('SOUTH')
        }
    }
    window.addEventListener('keydown', (e) => {
        handleKeyDown(e)
    })
    return player
}