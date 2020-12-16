import React, { useState } from 'react';
import UserAccountDetailsPresenter from "./UserAccountDetailsPresenter";

function UserAccountDetailsContainer({nextStep, prevStep}) {

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const [emailErr, setEmailErr] = useState("");
    const [passwordErr, setPasswordErr] = useState("");
    const [confirmPasswordErr, setConfirmPasswordErr] = useState("");

    const continueRegistration = (e) => {
        e.preventDefault();
        if(validateInputs()) {
            nextStep();
        }
    }

    const goBackRegistration = (e) => {
        e.preventDefault();
        prevStep();
    }

    const validateInputs = () => {
        // Clear previous errors
        setEmailErr("");
        setPasswordErr("");
        setConfirmPasswordErr("");

        let emailError = "";
        let passwordError = "";
        let cPasswordError = "";

        // Passwords mismatch
        if(userPassword !== passwordConfirm) cPasswordError = "Passwords don't match!";
        
        // Empty fields
        if(userEmail === "") emailError = "Enter an email!";
        if(userPassword === "") passwordError = "Enter a password!";
        if(passwordConfirm === "") cPasswordError = "Confirm your password!";
        


        if(emailError.length || passwordError.length || cPasswordError.length) {
            setEmailErr(emailError);
            setPasswordErr(passwordError);
            setConfirmPasswordErr(cPasswordError);
            return false;
        }
        
        // If the code reaches this point, there are no errors
        return true;
    }

    const values = {
        userEmail,
        setUserEmail,

        userPassword,
        setUserPassword,

        passwordConfirm,
        setPasswordConfirm,

        emailErr,
        passwordErr,
        confirmPasswordErr,
        
        continueRegistration,
        goBackRegistration
    }

    return (
        <>
            <UserAccountDetailsPresenter values={values} />
        </>
    )
}

export default UserAccountDetailsContainer
