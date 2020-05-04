import React from 'react';
import style from '../css/Overview.module.scss'

class Overview extends React.Component{

    render() {
        return (
            <div className={style.container}>
                <img src="assets/image/overview.jpg"/>
                <div className={style.desc}>
                    <strong>a-e:</strong> Taxonomy of transition designs in data videos.<br/>
                    <strong>f:</strong> Changed and unchanged visual variables of Preserving Guide and Narrative Agent transitions.
                </div>
            </div>
        );
    }
}

export default Overview;