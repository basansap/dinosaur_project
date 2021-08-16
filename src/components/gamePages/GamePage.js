import React, {Component} from "react";
import { Typography, Button } from '@material-ui/core';
import { withStyles } from "@material-ui/styles";
import dinasour from "../../img/giphy.png"


const useStyles = (theme) => ({
    button: {
        position: "relative",
        left: "50%",
        top: "10vh"
    },
});

class GamePage extends Component {

    render() {
        return(
            <div className="GamePage animation-section">
                <div className="animation_div_character">
                    <img src="https://i.imgur.com/HMaBaHf.png" className = "animation_div_character_sprites" alt = "sprites_img"></img>
                </div>
            </div>
        );
    }
}

export default withStyles(useStyles)(GamePage);