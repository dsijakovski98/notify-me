import React, { useState } from 'react'
import CompanyAccountDetailsPresenter from "./CompanyAccountDetailsPresenter";
import { emailPattern, websitePattern } from "../../../../helpers/validators";
import { checkUniqueCompanyEmail } from "../../../../helpers/queryManager";

function CompanyAccountDetailsContainer({values, nextStep, prevStep}) {

    const [progressBar, setProgressBar] = useState(false);

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

    const validateInputs = async () => {
        setProgressBar(true);

        // Clear input errors
        values.setCompanyEmailErr("");
        values.setCompanyPasswordErr("");
        values.setCompanyConfirmPasswordErr("");
        values.setCompanyWebsiteErr("");

        let compEmailError = "";
        let compPwdError = "";
        let compConfirmPwdError = "";
        let compWebsiteError = "";

        // Passwords Mismatsh
        if(values.companyPassword !== values.companyConfirmPassword)
            compConfirmPwdError = "Passwords don't match!";

        // Empty fields
        if(values.companyEmail.trim() === "")
            compEmailError = "Enter company's email!";
        if(values.companyPassword.trim() === "")
            compPwdError = "Enter password!";
        if(values.companyConfirmPassword.trim() === "")
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

        // Website validation
        if(values.companyWebsite.trim() !== "") {
            if(!websitePattern.test(values.companyWebsite))
                compWebsiteError = "Invalid website URL!";
        }

        if(compEmailError.length || compPwdError.length ||
            compConfirmPwdError.length || compWebsiteError.length) {
                values.setCompanyEmailErr(compEmailError);
                values.setCompanyPasswordErr(compPwdError);
                values.setCompanyConfirmPasswordErr(compConfirmPwdError);
                values.setCompanyWebsiteErr(compWebsiteError);
                setProgressBar(false);
                return false;
            }

        const uniqueEmail = await checkUniqueCompanyEmail(values.companyEmail);
        if(!uniqueEmail) {
            values.setCompanyEmailErr("Email is already in use!");
            setProgressBar(false);
            return false;
        }

        return true;
    }

    const continueRegistration = async (e) => {
        e.preventDefault();
        if(await validateInputs()) {
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
                progressBar={progressBar}
            />   
        </>
    )
}

export default CompanyAccountDetailsContainer
