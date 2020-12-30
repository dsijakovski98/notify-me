import React, { useContext } from 'react'
import { withRouter } from "react-router-dom";
import UserFormContainer from "../UserRegisterForm/UserFormContainer";
import CompanyFormContainer from "../CompanyRegisterForm/CompanyFormContainer"
import { Box } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { AuthContext } from "../../../firebase/auth";

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
        // TODO: check account type to redirect
        props.history.push("/notify-me-RST/user-page");
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
