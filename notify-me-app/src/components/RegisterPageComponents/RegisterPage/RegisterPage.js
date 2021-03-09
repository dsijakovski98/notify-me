import React, { useContext } from 'react'
import { withRouter } from "react-router-dom";
import UserFormContainer from "../UserRegisterForm/UserFormContainer";
import CompanyFormContainer from "../CompanyRegisterForm/CompanyFormContainer"
import { Box } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { AuthContext } from "../../../firebase/auth";
import { IsUserLogin } from "../../../helpers/queryManager";

const useStyles = makeStyles({
    centerFormContainer: {
        display: 'grid',
        placeItems: 'center',
        padding: '2em 1.5em'
    }
});

function RegisterPage(props) {

    const classes = useStyles();
    const { currentUser } = useContext(AuthContext);

    const checkRedirect = async () => {
        // Check account type for redirection
        const isUser = await IsUserLogin(currentUser.email);
        let redirectPage = "";
        
        if(isUser) {
            redirectPage = "user-page";
        }
        else {
            redirectPage = "company-page";

        }

        props.history.push(`/${redirectPage}`);
    }

    if(currentUser) {
        checkRedirect();
    }

    const registerType = props.match.params.type;
    const form = registerType === "user" 
            ? <UserFormContainer /> 
            : <CompanyFormContainer />

    return (
        !currentUser &&
        <Box className={classes.centerFormContainer}>
            {form}
        </Box>
    )
}

export default withRouter(RegisterPage);
