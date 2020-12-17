import React from 'react';
import CompanyProfilePicturePresenter from "./CompanyProfilePicturePresenter";

function CompanyProfilePictureContainer({values, nextStep, prevStep}) {

    const validateInputs = () => {
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
            <CompanyProfilePicturePresenter
                values={values}
                continueRegistration={continueRegistration}
                goBackRegistration={goBackRegistration}
            />  
        </>
    )
}

export default CompanyProfilePictureContainer
