import React from 'react';
import style from '../css/Overview.module.scss';
import YoutubePlayer from 'react-youtube-player'
//import PDF from 'react-pdf-js'
// const pdfurl = require('../assets/taxonomy_grey.pdf');

class Overview extends React.Component {

    render() {
        return (
            <div className={style.container}>
                {/*define*/}
                <div className={style.def}>
                    <span className={style.defName}>Transitions </span>
                    are widely used in data videos to seamlessly connect data-driven charts or connect visualizations and non-data-driven motion graphics. To inform the transition designs in data videos, we conduct a content analysis based on more than 3500 clips extracted from 284 data videos. We annotate visualization types and transition designs on these segments, and examine how these transitions help make connections between contexts. We propose a taxonomy of transitions in data videos, where two transition categories are defined in building fluent narratives by using visual variables.
                    <br/><br/>
                    If you want to know more about the research, please see our <a className={style.paper} href="https://arxiv.org/abs/2009.05233" target="_blank">paper</a>.
                    The supplemental material can be downloaded <a className={style.here} href={require("../assets/statical_results.zip")} download="statical results.zip">here</a>.
                </div>
                {/*links*/}
                <div className={style.links}>
                    {/*youtube play*/}
                    <div className={style.left}>
                        <YoutubePlayer
                            videoId='KE76BmByq18'
                            playbackState='unstarted'
                            configuration={{showinfo: 0, controls: 1}}
                        />
                    </div>
                    <div className={style.right}>
                        <a className={style.paperTitle} href="https://arxiv.org/abs/2009.05233" target="_blank">
                            Narrative Transitions in Data Videos
                        </a>
                        <div className={style.paperSource}>IEEE VIS 2020 Short Paper</div>
                        {/*the authors of the paper*/}
                        <div className={style.author}>
                            <a href="https://ahugh19.github.io/" className={style.item}>Junxiu Tang,</a>&nbsp;
                            <a href="https://yulingyun.com/" className={style.item}>Lingyun Yu,</a>&nbsp;
                            <a href="http://www.tantang.org/" className={style.item}>Tan Tang,</a><br/>
                            <a href="http://www.cse.ust.hk/~xshuaa/" className={style.item}>Xinhuan Shu,</a>&nbsp;
                            <a href="#" className={style.item}>Lu Ying,</a>&nbsp;
                            <a href="#" className={style.item}>Yuhua Zhou,</a><br/>
                            <a href="#" className={style.item}>Peiran Ren,</a>&nbsp;
                            <a href="http://www.ycwu.org/" className={style.item}>Yingcai Wu</a>
                        </div>
                    </div>
                </div>
                {/*overview body*/}
                <div className={style.body}>
                    <div style={{"text-align":"left","color":"black","font-weight":"700"}}>
                        The overview of the taxonomy is listed below.
                    </div>
                    <div className={style.desc}>
                        <strong>a-e:</strong> Taxonomy of transition designs in data videos .<br/>
                        <strong>f:</strong> Changed and unchanged visual variables of Preserving Guide and Narrative Agent
                        transitions.
                    </div>
                    {/*show the iamg with the pdf type*/}
                    {/*<PDF file={pdfurl} scale="1.2" />*/}
                    <img src="assets/image/overview.png"/>
                </div>
            </div>
        );
    }
}

export default Overview;
