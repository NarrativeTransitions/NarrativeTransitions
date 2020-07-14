import React from 'react';
import style from '../css/Overview.module.scss'
import PDF from 'react-pdf-js'
// const pdfurl = require('../assets/taxonomy_grey.pdf');

class Overview extends React.Component {

    render() {
        return (
            <div className={style.container}>
                <img src="assets/image/overview.png"/>
                {/*<PDF file={pdfurl} scale="1.2" />*/}
                <div className={style.desc}>
                    <strong>a-e:</strong> Taxonomy of transition designs in data videos.<br/>
                    <strong>f:</strong> Changed and unchanged visual variables of Preserving Guide and Narrative Agent
                    transitions.
                </div>
            </div>
        );
    }
}

export default Overview;
