import React from 'react'
import style from '../css/Navigation.module.scss'

class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            atTop: true,
            selected: 0
        }
    }

    componentDidMount() {
        let _this = this;
        //scrollbar listener
        window.addEventListener('scroll', function () {
            // is at top
            if (window.scrollY === 0) {
                _this.setState({ atTop: true });
            } else {
                // first scroll down
                if (_this.state.atTop === true) {
                    _this.setState({ atTop: false });
                }
            }
        });
    }

    // switch navigation pages
    switchItem = (i) => {
        this.setState({selected:i});
        this.props.parent.switchPage(i);
    };

    render() {
        return (
            <div className={style.container}>
                {/*hear*/}
                <div className={style.head}
                    style={{ background: this.state.atTop ? "none" : "#4d4548" }}>
                    {/*logo*/}
                    <div className={style.logo}>Narrative Transitions</div>
                    {/*option*/}
                    <div className={this.state.selected === 0 ? style.optionSelected : style.option} onClick={this.switchItem.bind(this,0)}>overview</div>
                    <div className={this.state.selected === 1 ? style.optionSelected : style.option} onClick={this.switchItem.bind(this,1)}>taxonomy</div>
                    <div className={this.state.selected === 2 ? style.optionSelected : style.option} onClick={this.switchItem.bind(this,2)}>use case</div>
                </div>

                {/*banner*/}
                <div className={style.banner}>
                    <div className={style.bg}>
                        <div className={style.title}>
                            Narrative Transitions <br />
                            in Data Videos
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default Navigation;
