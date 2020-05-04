import React from 'react';
import style from '../css/App.module.scss'
import Navigation from "./Navigation";
import Taxonomy from "./Taxonomy";
import Overview from "./Overview";

class App extends React.Component {

    constructor(props){
        super(props);
        this.state={
            current : 0,
            pages : [<Taxonomy/>,<Overview/>]
        };
    }

    switchPage = (index) =>{

        if(index != this.state.current){
            this.setState({current:index});
            // scroll to top
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
    };

    renderPage(){
        let current = this.state.current;
        return this.state.pages[current];
    }

    render() {
        return (
            <div className={style.container}>
                <Navigation parent={this}/>
                {this.renderPage()}
            </div>
        );
    }
}

export default App;
