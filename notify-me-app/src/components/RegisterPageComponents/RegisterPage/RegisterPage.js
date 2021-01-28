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
    const { currentUser } = useContext(AuthContext);

    if(currentUser) {
        // Check account type for redirection
        const isUser = IsUserLogin(currentUser.email);
            isUser.then((snapshot) => {
                let redirectPage = "";
                if(snapshot.docs.length > 0) {
                    // User logs in
                    redirectPage = "user-page";
                }
                else {
                    redirectPage = "company-page";
                }
                props.history.push(`/notify-me-RST/${redirectPage}`);
            })
    }

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
