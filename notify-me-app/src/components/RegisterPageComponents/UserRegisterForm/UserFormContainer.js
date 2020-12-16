import React, { useState } from 'react'
import UserGeneralDetailsContainer from "./UserGeneralDetails/UserGeneralDetailsContainer";
import UserAccountDetailsContainer from "./UserAccountDetails/UserAccountDetailsContainer";
import UserProfilePictureContainer from "./UserProfilePicture/UserProfilePictureContainer";
import ConfirmDetails from "../ConfirmDetails/ConfirmDetails";
import SuccessRegistration from "../SuccessRegistration/SuccessRegistration";




function UserFormContainer() {

    const [step, setStep] = useState(1);

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
                    />
                )
            case 2:
                return (
                    // AccountUserDetails
                    <UserAccountDetailsContainer
                        nextStep={nextStep}
                        prevStep={prevStep}
                    />
                )
            case 3:
                return (
                    // ProfilePicture
                    <UserProfilePictureContainer
                        nextStep={nextStep}
                        prevStep={prevStep}
                    />
                )
            case 4:
                return (
                    // ConfirmInput
                    <ConfirmDetails
                        nextStep={nextStep}
                        prevStep={prevStep}
                    />
                )
            case 5:
                return (
                    // Success
                    <SuccessRegistration />
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
