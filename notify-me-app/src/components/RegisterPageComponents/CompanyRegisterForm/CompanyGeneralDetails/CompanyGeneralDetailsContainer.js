import React from 'react'
import CompanyGeneralDetailsPresenter from './CompanyGeneralDetailsPresenter'

function CompanyGeneralDetailsContainer({values, nextStep}) {
    
    const validateInputs = () => {
        // Clear previous errors
        values.setCompanyNameErr("");
        values.setCompanyFounderFirstNameErr("");
        values.setCompanyFounderLastNameErr("");

        let compNameError = "";
        let compFounderFirstNameError = "";
        let compFounderLastNameError = "";

        // Check date validity
        if(isNaN(values.companyStartDate.getTime()))  return false;

        // Empty Fields
        if(values.companyName === "") compNameError = "Enter company's name!";
        if(values.companyFounderFirstName === "")
            compFounderFirstNameError = "Enter CEO's first name!";
        if(values.companyFounderLastName === "")
            compFounderLastNameError = "Enter CEO's last name!";


        if(compNameError.length || compFounderFirstNameError.length ||
            compFounderLastNameError.length) {
                values.setCompanyNameErr(compNameError);
                values.setCompanyFounderFirstNameErr(compFounderFirstNameError);
                values.setCompanyFounderLastNameErr(compFounderLastNameError);
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

    return (
        <>
            <CompanyGeneralDetailsPresenter 
                values={values}
                continueRegistration={continueRegistration}
            />
        </>
    )
}

export default CompanyGeneralDetailsContainer
