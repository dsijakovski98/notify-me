import React from 'react'
import { withRouter } from "react-router-dom";
import UserFormContainer from "../UserRegisterForm/UserFormContainer";
import CompanyFormContainer from "../CompanyRegisterForm/CompanyFormContainer"
import { Box } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    centerFormContainer: {
        display: 'grid',
        placeItems: 'center',
        padding: '2em 1.5em'
    }
});

function RegisterPage(props) {
    const classes = useStyles();

    const registerType = props.match.params.type;
    const form = registerType === "user" 
            ? <UserFormContainer /> 
            : <CompanyFormContainer />

    return (
        <Box className={classes.centerFormContainer}>
            {form}
        </Box>
    )
}

export default withRouter(RegisterPage);
