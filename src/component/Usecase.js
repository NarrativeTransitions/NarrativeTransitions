import React from 'react';
import {Player,ControlBar} from 'video-react'
import "../css/video-react.css";
import style from '../css/Usecase.module.scss'

class Usecase extends React.Component{

    render() {
        return (
            <div className={style.video}>
                <Player
                    playsInline
                    // src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                    src={require("../assets/video/usecase.mp4")}>
                    <ControlBar autoHide={false} />
                </Player>
            </div>

        );
    }
}
export default Usecase;
