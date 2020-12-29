import "./style/style.css";
import LoginFormPresenter from "./LoginFormPresenter";
import React, { useState } from 'react';
import { withRouter } from "react-router-dom";
import {emailPattern} from "../../../helpers/validators";
import { login } from "../../../helpers/currentUserManager";

function LoginFormContainer(props) {

    const TEST_MODE = false;

    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    
    const [emailErr, setEmailErr] = useState("");
    const [passwordErr, setPasswordErr] = useState("");

    const signIn = (e) => {
        e.preventDefault();
        if(validateLogin()) {
            login(emailInput, passwordInput);
            props.history.push("/notify-me-RST/user-page");
        }
    }

    const validateLogin = () => {

        // if(TEST_MODE) {
        //     props.history.push("/notify-me-RST/user-page")
        // }
        // Clear previous errors
        setEmailErr("");
        setPasswordErr("");

        let emailError = "";
        let pwdError = "";

        // Empty fields
        if(emailInput === "") emailError = "Enter your email!";
        if(passwordInput === "") pwdError = "Enter your password!";

        // Pattern match
        if(!emailPattern.test(emailInput) && emailInput.length)
            emailError = "Email invalid format!";

        if(emailError.length || pwdError.length) {
            setEmailErr(emailError);
            setPasswordErr(pwdError);
            return false;
        }
            
        // Check user existence
        // * Firebase required *

        return true;
    }

    return (
        <LoginFormPresenter 
            email={emailInput} setEmail={setEmailInput}
            emailError={emailErr}

            passwordInput={passwordInput} setPassword={setPasswordInput}
            passwordError={passwordErr}

            signIn={signIn}
        />
    )
}

export default withRouter(LoginFormContainer);
