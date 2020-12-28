import "./style/style.css";
import LoginFormPresenter from "./LoginFormPresenter";
import React, { useState } from 'react';
import { withRouter } from "react-router-dom";
import {emailPattern} from "../../../helperFunctions/validators";

function LoginFormContainer(props) {

    const TEST_MODE = true;

    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    
    const [emailErr, setEmailErr] = useState("");
    const [passwordErr, setPasswordErr] = useState("");

    const signIn = (e) => {
        e.preventDefault();
        validateLogin();
    }

    const validateLogin = () => {

        if(TEST_MODE) {
            props.history.push("/notify-me-RST/user-page")
        }
        // Clear previous errors
        setEmailErr("");
        setPasswordErr("");

        // Empty fields
        if(emailInput === "") setEmailErr("Enter your email!");
        if(passwordInput === "") setPasswordErr("Enter your password!");

        // Pattern match
        if(!emailPattern.test(emailInput) && emailInput.length)
            setEmailErr("Email invalid format!");

        // Check user existence
        // * Firebase required *

        // If valid login : 
        // props.history.push("/notify-me-RST/user-page")
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
