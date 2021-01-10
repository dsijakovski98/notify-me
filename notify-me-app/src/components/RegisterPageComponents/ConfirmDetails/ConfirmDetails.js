import "./style/style.css";
import React from 'react'
import { withRouter } from "react-router-dom";

import { List, ListItem, Typography, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { register } from "../../../helpers/currentUserManager";
import { addUser, addCompany } from "../../../helpers/databaseAdd";
import { v4 as uuidv4 } from 'uuid';

const useStyles = makeStyles({
    root: {
        display: 'grid',
        justifyContent: 'center'
    },
})

function ConfirmDetails(props) {
    const {parameters, prevStep, values, accountType} = props;

    const classes = useStyles();

    const keys = Object.keys(parameters);
    const detailValues = Object.values(parameters);
    

    const registerAccount = () => {
        // Generate id
        const id = uuidv4();
        let accountData = null;

        if(accountType === "user") {
            accountData = extractUserData(id);
        }
        else if(accountType === "company") {
            accountData = extractCompanyData(id);
        }

        const {email, password, displayName, profileUrl} = accountData;

        const registerPromise = register(email, password, displayName, profileUrl);
        registerPromise.then(() => {

            let redirectPage = `${accountType}-page`;
            // Check account type
            if(accountType === "user") {
                // Insert user into database
                const userPromise = addUser(accountData);
                userPromise.then(() => {
                    props.history.push(`/notify-me-RST/${redirectPage}`);
                })
            }
            else if(accountType === "company") {
                // Insert company into database
                const companyPromise = addCompany(accountData);
                companyPromise.then(() => {
                    props.history.push(`/notify-me-RST/${redirectPage}`);
                })
            }

            // props.history.push(`/notify-me-RST/${redirectPage}`);
        })


    }


    const extractUserData = (id) => {
        return {
            id,
            email: values.userEmail,
            password: values.userPassword,
            displayName: values.firstName,
            profileUrl: values.imageSource,

            firstName: values.firstName,
            lastName: values.lastName,
            gender: values.gender,
            dateOfBirth: values.dateOfBirth
        }
    }

    const extractCompanyData = (id) => {
        return {
            id,
            email: values.companyEmail,
            password: values.companyPassword,
            displayName: values.companyName,
            profileUrl: values.imageSource,

            companyName: values.companyName,
            dateOfCreation: values.companyStartDate,
            ceoFirstName: values.companyFounderFirstName,
            ceoLastName: values.companyFounderLastName,
            cityHeadquarters: values.headCity,
            serviceType: values.serviceType,
            branches: values.branches
        }
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
                    Register
                </Button>
            </Grid>
        </Grid>
    </List>
    </div>
    )
}

export default withRouter(ConfirmDetails)
