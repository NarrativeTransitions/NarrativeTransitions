import React from 'react';
import store from "./store/store";
import style from "../css/Taxonomy.module.scss";
import ListItem from "./ListItem";

class Taxonomy extends React.Component{

    constructor(props){
        super(props);
        this.state={
            current : 4
        };
    }

    renderLi(){
        let result = [];
        for (let i = 0; i < store.getState()["sampleList"].length; i++) {
            result.push(
                <li className={ this.state.current === i ?  style.liSelected:style.li}
                    onClick={()=>this.setState({current:i})}>
                    {store.getState()["sampleList"][i]["category"]}
                </li>
            );
            // skip last one
            if(i<store.getState()["sampleList"].length-1){
                result.push("/");
            }
        }
        return result;
    }

    renderList() {
        let result = [];
        // let i = this.state.current;
        for(let i = 0;i<store.getState()["sampleList"].length;i++){
            // add small type
            for (let j = 0; j < store.getState()["sampleList"][i]["samples"].length; j++) {

                let display = i===this.state.current ? "flex":"none";

                result.push(
                    <ListItem
                        display= {display}
                        type={store.getState()["sampleList"][i]["samples"][j]["type"]}
                        definition={store.getState()["sampleList"][i]["samples"][j]["definition"]}
                        imageUrl={store.getState()["sampleList"][i]["samples"][j]["imageUrl"]}
                        linkName1={store.getState()["sampleList"][i]["samples"][j]["links"][0]["name"]}
                        linkUrl1={store.getState()["sampleList"][i]["samples"][j]["links"][0]["url"]}
                        linkName2={store.getState()["sampleList"][i]["samples"][j]["links"][1]["name"]}
                        linkUrl2={store.getState()["sampleList"][i]["samples"][j]["links"][1]["url"]}
                    />
                );
            }
        }
        return result;
    }

    render(){
        let i = this.state.current;
        return (
            <div className={style.container}>
                {/* title */}
                <div className={style.bigTitle}>
                    <ul>
                        {/**/}
                        {this.renderLi()}
                    </ul>
                </div>
                {/*define container*/}
                <div className={style.defContainer}>
                    <div className={style.def}>
                        <span className={style.quote}>" </span>
                        <span className={style.title}>&nbsp;&nbsp;&nbsp;
                            {store.getState()["sampleList"][i]["category"]}
                            &nbsp;&nbsp;</span>
                        <span>{store.getState()["sampleList"][i]["desc"]}</span>
                        <span className={style.quote}> &nbsp;"</span>
                    </div>
                </div>
                {/*rlistItem*/}
                {this.renderList()}
            </div>
        );
    }
}

export default Taxonomy;