import React, { useState } from 'react'
import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    userFormGrid: {
        width: '70%',
        margin: '0 auto'
    }
});



function CompanyFormContainer() {
    const classes = useStyles();

    // const [step, setStep] = useState(1);

    // const nextStep = () => {
    //     setStep(step + 1);
    // }

    // const prevStep = () => {
    //     setStep(step - 1);
    // }

    // const setCurrentComponent = () => {
    //     switch(step) {
    //         case 1:
    //             return (
    //                 // GeneralUserDetails
    //                 <h1 style={{color: 'white'}}>General Details</h1>
    //             )
    //         case 2:
    //             return (
    //                 // AccountUserDetails
    //                 <h1 style={{color: 'white'}}>Account Details</h1>
    //             )
    //         case 3:
    //             return (
    //                 // ProfilePicture
    //                 <h1 style={{color: 'white'}}>Profile Picture</h1>
    //             )
    //         case 4:
    //             return (
    //                 // ConfirmInput
    //                 <h1 style={{color: 'white'}}>Confirm Details</h1>
    //             )
    //         case 5:
    //             return (
    //                 // Success
    //                 <h1 style={{color: 'white'}}>Successfull registration</h1>
    //             )
    //         default:
    //             return alert("Invalid step!");
    //     }
    // }

    return (
        <Grid container className={classes.userFormGrid} direction="row" spacing={4}>
            {/* {setCurrentComponent()} */}
            Company
        </Grid>
    )
}

export default CompanyFormContainer
