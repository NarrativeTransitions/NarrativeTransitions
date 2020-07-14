import React from 'react';
import {Player,ControlBar} from 'video-react'
import "../css/video-react.css";
import style from '../css/Usecase.module.scss'

class Usecase extends React.Component{

    render() {
        return (
            <div className={style.video}>

                {/*define container*/}
                <div className={style.defContainer}>
                    <div className={style.def}>
                        {/*<span className={style.quote}>" </span>*/}
                        {/*<span className={style.title}>&nbsp;&nbsp;&nbsp;*/}
                            {/*{store.getState()["sampleList"][i]["category"]}*/}
                            {/*&nbsp;&nbsp;</span>*/}
                        <span>
                            Here is a use case on leveraging the taxonomy to design a data video. The video is about COVID-19, which introduces the severe condition of the COVID-19 spreading by presenting a series of data facts with elaborate transitions.
                        </span>
                        {/*<span className={style.quote}> &nbsp;"</span>*/}
                    </div>
                </div>

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
