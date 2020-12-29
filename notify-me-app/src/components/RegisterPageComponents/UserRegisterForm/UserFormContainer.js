import React, { useState } from 'react'

import UserGeneralDetailsContainer from "./UserGeneralDetails/UserGeneralDetailsContainer";
import useGeneralDetails from "./UserGeneralDetails/useGeneralDetailsValues";

import UserAccountDetailsContainer from "./UserAccountDetails/UserAccountDetailsContainer";
import useAccountDetails from "./UserAccountDetails/useAccountDetails";

import UserProfilePictureContainer from "./UserProfilePicture/UserProfilePictureContainer";
import useProfilePicture from "./UserProfilePicture/useProfilePicture";

import ConfirmDetails from "../ConfirmDetails/ConfirmDetails";
import SuccessRegistration from "../SuccessRegistration/SuccessRegistration";

function UserFormContainer() {
    const [step, setStep] = useState(1);

    const [userGeneralDetailsValues, userGeneralDetailsParams] = useGeneralDetails();
    const [userAccountDetailsValues, userAccountDetailsParams] = useAccountDetails();
    const [userProfilePictureValues] = useProfilePicture();

    // All Details
    const AllDetails = {
        ...userGeneralDetailsParams,
        ...userAccountDetailsParams
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
                    <UserGeneralDetailsContainer
                        nextStep={nextStep}
                        values={userGeneralDetailsValues}
                    />
                )
            case 2:
                return (
                    // AccountUserDetails
                    <UserAccountDetailsContainer
                        nextStep={nextStep}
                        prevStep={prevStep}
                        values={userAccountDetailsValues}
                    />
                )
            case 3:
                return (
                    // ProfilePicture
                    <UserProfilePictureContainer
                        nextStep={nextStep}
                        prevStep={prevStep}
                        values={userProfilePictureValues}
                    />
                )
            case 4:
                return (
                    // ConfirmInput
                    <ConfirmDetails
                        nextStep={nextStep}
                        prevStep={prevStep}
                        values={AllDetails}
                        email={userAccountDetailsValues.userEmail}
                        password={userAccountDetailsValues.userPassword}
                        displayName={userGeneralDetailsValues.firstName}
                        img={userProfilePictureValues.imageSource}
                    />
                )
            default:
                return alert("Invalid step!")
        }
    }

    return (
        <>
        {setCurrentComponent()}
        </>
    )
}

export default UserFormContainer
