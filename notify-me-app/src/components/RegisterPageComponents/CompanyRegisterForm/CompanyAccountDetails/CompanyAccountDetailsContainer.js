import React from 'react'
import CompanyAccountDetailsPresenter from "./CompanyAccountDetailsPresenter";
import { emailPattern } from "../../../../helpers/validators";

function CompanyAccountDetailsContainer({values, nextStep, prevStep}) {

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
        // Clear input errors
        values.setCompanyEmailErr("");
        values.setCompanyPasswordErr("");
        values.setCompanyConfirmPasswordErr("");

        let compEmailError = "";
        let compPwdError = "";
        let compConfirmPwdError = "";

        // Passwords Mismatsh
        if(values.companyPassword !== values.companyConfirmPassword)
            compConfirmPwdError = "Passwords don't match!";

        // Empty fields
        if(values.companyEmail === "")
            compEmailError = "Enter company's email!";
        if(values.companyPassword === "")
            compPwdError = "Enter password!";
        if(values.companyConfirmPassword === "")
            compConfirmPwdError = "Confirm password!";
        
        
        // Email format validation
        if(!emailPattern.test(values.companyEmail))
            compEmailError = "Email invalid format!";

        // No uppercase letters in email
        if(emailHasUpperCase(values.companyEmail))
            compEmailError = "No uppercase letters in email!";

        // Password length
        if(values.companyPassword.length < 6)
            compPwdError = "Password must be at least 6 characters!";

        if(compEmailError.length || compPwdError.length ||
            compConfirmPwdError.length) {
                values.setCompanyEmailErr(compEmailError);
                values.setCompanyPasswordErr(compPwdError);
                values.setCompanyConfirmPasswordErr(compConfirmPwdError);
                return false;
            }

        return true;
    }

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


    return (
        <>
            <CompanyAccountDetailsPresenter 
                values={values}
                continueRegistration={continueRegistration}
                goBackRegistration={goBackRegistration}
            />   
        </>
    )
}

export default CompanyAccountDetailsContainer
