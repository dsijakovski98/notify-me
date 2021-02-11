import React from 'react';
import UserAccountDetailsPresenter from "./UserAccountDetailsPresenter";
import { emailPattern } from "../../../../helpers/validators";

function UserAccountDetailsContainer({values, nextStep, prevStep}) {

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

    const emailHasUpperCase = (email) => {
        let hasUpperCase = false;

        for(let i = 0; i < email.length; i++) {
            const letter = email[i];

            if(/^[A-Z]*$/.test(letter)) {
                hasUpperCase = true;
                break;
            }
        }

        return hasUpperCase;
    }

    const validateInputs = () => {
        // Clear previous errors
        values.setEmailErr("");
        values.setPasswordErr("");
        values.setConfirmPasswordErr("");

        let emailError = "";
        let passwordError = "";
        let cPasswordError = "";

        // Passwords mismatch
        if(values.userPassword !== values.passwordConfirm)
            cPasswordError = "Passwords don't match!";
        
        // Empty fields
        if(values.userEmail.trim() === "") emailError = "Enter an email!";
        if(values.userPassword.trim() === "") passwordError = "Enter a password!";
        if(values.passwordConfirm.trim() === "") cPasswordError = "Confirm your password!";
        
        // Valid email format
        if(!emailPattern.test(values.userEmail)) emailError = "Email invalid format!";

        // No uppercase letters in email
        if(emailHasUpperCase(values.userEmail)) emailError = "No uppercase letters in email!";

        // Password length
        if(values.userPassword.length < 6)
            passwordError = "Password must be at least 6 characters!";

        if(emailError.length || passwordError.length || cPasswordError.length) {
            values.setEmailErr(emailError);
            values.setPasswordErr(passwordError);
            values.setConfirmPasswordErr(cPasswordError);
            return false;
        }
        
        // If the code reaches this point, there are no errors
        return true;
    }

    return (
        <>
            <UserAccountDetailsPresenter 
                values={values}
                continueRegistration={continueRegistration}
                goBackRegistration={goBackRegistration}
            />
        </>
    )
}

export default UserAccountDetailsContainer;
