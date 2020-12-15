import "./style/style.css";
import LoginFormPresenter from "./LoginFormPresenter";
import React, { useState } from 'react';
import {emailPattern} from "../../../helperFunctions/validators";

function LoginFormContainer() {

    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    
    const [emailErr, setEmailErr] = useState("");
    const [passwordErr, setPasswordErr] = useState("");

    const signIn = (e) => {
        e.preventDefault();
        validateLogin();
        console.log(emailInput);
        console.log(passwordInput);
    }

    const validateLogin = () => {
        // Clear previous errors
        setEmailErr("");
        setPasswordErr("");

        // Empty fields
        if(emailInput === "") setEmailErr("Enter your email!");
        if(passwordInput === "") setPasswordErr("Enter your password!");

        // Pattern match
        if(!emailPattern.test(emailInput) && emailInput.length)
            setEmailErr("Enter a valid email!");

        // Check user existence
        // * Firebase required *
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

export default LoginFormContainer;
