import React from 'react';
import UserAccountDetailsPresenter from "./UserAccountDetailsPresenter";

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
        if(values.userEmail === "") emailError = "Enter an email!";
        if(values.userPassword === "") passwordError = "Enter a password!";
        if(values.passwordConfirm === "") cPasswordError = "Confirm your password!";
        


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
