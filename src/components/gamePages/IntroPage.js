import React, {Component} from "react";
import { Typography, Button } from '@material-ui/core';
import { withStyles } from "@material-ui/styles";


const useStyles = (theme) => ({
    button: {
        position: "relative",
        left: "50%",
        top: "10vh"
    },
});

class IntroPage extends Component {
    render() {
        const { classes } = this.props;
        return(
            <div className="IntroPage">
                <Typography variant='h2' align='center'>
                    WELCOME TO THE DINOSAUR GAME
                </Typography>
                <Button className={classes.button} variant='contained' color='secondary' onClick={() => { this.props.onClickHandler(2) }}>START</Button>
            </div>
        );
    }
}

export default withStyles(useStyles)(IntroPage);