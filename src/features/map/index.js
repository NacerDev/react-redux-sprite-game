import React from 'react'
import { SPRITE_SIZE } from '../../config/constants';
import { connect } from 'react-redux'
import './styles.css'
function getTileSprite(type) {
    // eslint-disable-next-line default-case
    switch (type) {
        case 0:
            return 'grass'
        case 5:
            return 'rock'
        case 6:
            return 'tree'
    }
}
function MapTile(props) {
    return (
        <div
            className={`tile ${getTileSprite(props.tile)}`}
            style={{
                height: SPRITE_SIZE,
                width: SPRITE_SIZE
            }}
        />
    )
}
function MapRow(props) {
    return <div
        style={{
            height: SPRITE_SIZE
        }}
        className='row'
    >
        {props.tiles.map(tile => <MapTile tile={tile} />)}
    </div>
}
function Map(props) {
    return (
        <div
            style={{
                position: 'relative',
                width: '800px',
                height: '400px',
                top: 0,
                left: 0,
                border: '1px solid white'
            }}
        >
            {
                props.tiles.map(row => <MapRow tiles={row} />)
            }
        </div>
    )
}
function mapStateToProps(state) {
    return {
        ...state.map
    }
}
export default connect(mapStateToProps)(Map)