import React from 'react'
import style from '../css/ListItem.module.scss'

class ListItem extends React.Component{

    render(){
        return(
            <div style={{"display":this.props.display}} className={style.container}>

                {/*left*/}
                <div className={style.left}>
                    <img src={this.props.imageUrl}/>
                </div>

                {/*right*/}
                <div className={style.right}>

                    {/*type*/}
                    <div className={style.type}>{this.props.type}</div>

                    {/*definition*/}
                    <div className={style.definition}>
                        <span className={style.tag}>Definition :</span>
                        <span className={style.sub}>{this.props.definition}</span>
                     </div>

                    {/*links*/}
                    {/*<div className={style.links}>*/}
                        {/*<span className={style.tag}>Links :</span>*/}
                        {/*<span className={style.sub}>*/}
                            {/*<br/>*/}
                            {/*<a target="_blank" href={this.props.linkUrl1}>{this.props.linkName1}</a>*/}
                            {/*<br/>*/}
                            {/*<a target="_blank" href={this.props.linkUrl2}>{this.props.linkName2}</a>*/}
                        {/*</span>*/}
                    {/*</div>*/}
                </div>
            </div>
        )
    }
}
export default ListItem;