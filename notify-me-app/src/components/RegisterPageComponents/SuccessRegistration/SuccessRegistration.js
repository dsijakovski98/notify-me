import "./style/style.css";
import React from 'react';
import { Link } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    subtitle: {
        fontWeight: 200
    }
});

function SuccessRegistration() {
    const classes = useStyles();

    return (
        <>
            <Typography variant="h1" id="congrats-text">Congratulations!</Typography>
            <Typography variant="h4" className={classes.subtitle} id="subtitle-text">
                You have created an account!
            </Typography>
            <br/>
            <br/>
            <br/>
            <Link to={"/notify-me-RST/"}>
                <Button
                className="home-button"
                variant="contained"
                color="primary"
                >
                    Go to homepage
                </Button>
            </Link>
        </>
    )
}

export default SuccessRegistration
