import "./style/style.css";
import LoginFormPresenter from "./LoginFormPresenter";
import React, { useState } from 'react';
import { withRouter } from "react-router-dom";
import {emailPattern} from "../../../helpers/validators";
import { login } from "../../../helpers/currentUserManager";
import { IsUserLogin } from "../../../helpers/queryManager";

function LoginFormContainer(props) {

    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    
    const [emailErr, setEmailErr] = useState("");
    const [passwordErr, setPasswordErr] = useState("");

    const signIn = async (e) => {
        e.preventDefault();
        if(await validateLogin()) {
            const isUser = await IsUserLogin(emailInput);
            let redirectPage = "";

            if(isUser) {
                redirectPage = "user-page";
            }
            else {
                redirectPage = "company-page";
            }

            props.history.push(`/${redirectPage}`);
        }
    }

    const validateLogin = async () => {
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

            
        // Check user existence
        const loginData = await login(emailInput, passwordInput);
        if(loginData.error) {
            switch (loginData.code) {
                case 'auth/wrong-password':
                    pwdError = loginData.message;
                    break;
                default:
                    emailError = loginData.message;
                    break;
            }
        }

        if(emailError.length || pwdError.length) {
            setEmailErr(emailError);
            setPasswordErr(pwdError);
            return false;
        }
        
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
