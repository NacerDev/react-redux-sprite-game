import React from 'react'
import walkSprite from './player_walk.png'
import { connect } from 'react-redux'
import handleMove from "./move";
function Player(props) {

    return (
        <div
            style={{
                position: "absolute",
                top: props.position[1],
                left: props.position[0],
                backgroundImage: `url('${walkSprite}')`,
                backgroundPosition: '0 0',
                width: '40px',
                height: '40px'
            }}

        />
    )

}

function mapStateToProps(state) {
    return {
        ...state.player
    }
}
export default connect(mapStateToProps)(handleMove(Player))