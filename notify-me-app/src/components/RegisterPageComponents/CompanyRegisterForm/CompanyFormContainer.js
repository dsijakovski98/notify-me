import React, { useState } from 'react'

import CompanyGeneralDetailsContainer from "./CompanyGeneralDetails/CompanyGeneralDetailsContainer";
import useCompanyGeneralDetails from "./CompanyGeneralDetails/useCompanyGeneralDetails";

import CompanyServiceDetailsContainer from "./CompanyServiceDetails/CompanyServiceDetailsContainer";
import useCompanyServiceDetails from "./CompanyServiceDetails/useCompanyServiceDetails";

import CompanyAccountDetailsContainer from "./CompanyAccountDetails/CompanyAccountDetailsContainer";
import useCompanyAccountDetails from "./CompanyAccountDetails/useCompanyAccountDetails";

import CompanyProfilePictureContainer from "./CompanyProfilePicture/CompanyProfilePictureContainer";
import useCompanyProfilePicture from "./CompanyProfilePicture/useCompanyProfilePicture";

import ConfirmDetails from "../ConfirmDetails/ConfirmDetails";

function CompanyFormContainer() {
    const [step, setStep] = useState(1);

    const [companyGeneralDetailsValues, companyGeneralDetailsParams] =
        useCompanyGeneralDetails();
    const [companyServiceDetailsValues, companyServiceDetailsParams] = 
        useCompanyServiceDetails();
    const [companyAccountDetailsValues, companyAccountDetailsParams] = 
        useCompanyAccountDetails();    
    const [companyProfilePictureValues] = useCompanyProfilePicture();

    // All Details
    const allDetails = {
        ...companyGeneralDetailsParams,
        ...companyServiceDetailsParams,
        ...companyAccountDetailsParams
    }

    // All Values
    const allValues = {
        ...companyGeneralDetailsValues,
        ...companyServiceDetailsValues,
        ...companyAccountDetailsValues,
        ...companyProfilePictureValues
    }

    const nextStep = () => {
        setStep(step + 1);
    }

    const prevStep = () => {
        setStep(step - 1);
    }

    const setCurrentComponent = () => {
        switch(step) {
            case 1:
                return (
                    // GeneralUserDetails
                    <CompanyGeneralDetailsContainer 
                        values={companyGeneralDetailsValues}
                        nextStep={nextStep}
                    />
                )
            case 2:
                return (
                    // Company Service Details
                    <CompanyServiceDetailsContainer 
                        values={companyServiceDetailsValues}
                        nextStep={nextStep}
                        prevStep={prevStep}
                    />
                )
            case 3:
                return (
                    // Company Account Details
                    <CompanyAccountDetailsContainer
                        values={companyAccountDetailsValues}
                        nextStep={nextStep}
                        prevStep={prevStep}
                    />
                )
            case 4:
                return (
                    // Company Profile Picture
                    <CompanyProfilePictureContainer 
                        values={companyProfilePictureValues}
                        nextStep={nextStep}
                        prevStep={prevStep}
                    />
                )
            case 5:
                return (
                    // Confirm Inputs
                    <ConfirmDetails 
                        parameters={allDetails}
                        prevStep={prevStep}
                        values={allValues}
                        accountType={"company"}
                    />
                )
            default:
                return alert("Invalid step!");
        }
    }

    return (
        <>
            {setCurrentComponent()}
        </>
    )
}

export default CompanyFormContainer
