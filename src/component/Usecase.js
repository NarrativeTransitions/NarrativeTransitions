import React from 'react';
import {Player,ControlBar,PlaybackRateMenuButton} from 'video-react'
import "../css/video-react.css";
import style from '../css/Usecase.module.scss'

class Usecase extends React.Component{

    render() {
        return (
            <div className={style.video}>

                {/*define container*/}
                <div className={style.defContainer}>
                    <div className={style.def}>
                        <span>
                            Here is a use case on leveraging the taxonomy to design a data video. The video is about COVID-19, which introduces the severe condition of the COVID-19 spreading by presenting a series of data facts with elaborate transitions.
                        </span>
                    </div>
                </div>

                <Player
                    playsInline
                    // src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                    src={require("../assets/video/usecase.mp4")}>
                    <ControlBar autoHide={false}>
                        <PlaybackRateMenuButton rates={[2, 1.5, 1, 0.5, 0.1]} order={7.1} />
                    </ControlBar>
                </Player>

            </div>

        );
    }
}
export default Usecase;
