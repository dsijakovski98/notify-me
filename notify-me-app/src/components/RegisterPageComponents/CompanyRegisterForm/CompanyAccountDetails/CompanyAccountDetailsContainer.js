import { validate } from '@material-ui/pickers';
import React from 'react'
import CompanyAccountDetailsPresenter from "./CompanyAccountDetailsPresenter";

function CompanyAccountDetailsContainer({values, nextStep, prevStep}) {

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
