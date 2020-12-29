import "./style/style.css";
import React from 'react'
import { List, ListItem, Typography, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { register } from "../../../helpers/currentUserManager";

const useStyles = makeStyles({
    root: {
        display: 'grid',
        justifyContent: 'center'
    },
})

function ConfirmDetails({values, nextStep, prevStep, email, password, displayName, img}) {

    const classes = useStyles();

    const keys = Object.keys(values);
    const detailValues = Object.values(values);

    const registerAccount = () => {
        register(email, password, displayName, img);
        nextStep();
    }


    return (
        <div className="confirm-list-container">
        <Typography variant="h3" className="confirm-details-title">Confirm Details</Typography>
        <List >
            {
                keys.map((key, index) => {
                    return (
                            <div key={key}>
                                <ListItem className={classes.root}>
                                    <h3 className="detail-title">
                                        {key}
                                    </h3>
                                </ListItem>
                                <ListItem className={classes.root}>
                                    <p className="detail-value">
                                        {detailValues[index]}
                                    </p>
                                </ListItem>
                                <hr/>
                                <br/>
                                <br/>
                            </div>
                    );
                }) 
            }
        
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <Button
                    fullWidth
                    variant="contained"
                    onClick={prevStep}
                >
                    Back
                </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Button
                    variant="contained"
                    fullWidth
                    color="primary"
                    onClick={registerAccount}
                >
                    Continue
                </Button>
            </Grid>
        </Grid>
    </List>
    </div>
    )
}

export default ConfirmDetails
