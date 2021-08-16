import React, { Component } from "react";
import IntroPage from "./gamePages/IntroPage";
import GamePage from "./gamePages/GamePage";


class GameContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonClicked : 1
        }
    }
    handleButtonClicked = (buttonClickedValue) => {
        this.setState({buttonClicked: {buttonClickedValue}});
    }
    render() {
        return (
            <div className="GameContainer">
                {
                    this.state.buttonClicked == 1 ?
                        <IntroPage onClickHandler={this.handleButtonClicked}/>:
                        <GamePage/>
                }
            </div>
        );
    }
}

export default GameContainer;