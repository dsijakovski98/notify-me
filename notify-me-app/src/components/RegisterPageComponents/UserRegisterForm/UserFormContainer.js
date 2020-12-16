import React, { useState } from 'react'
import UserGeneralDetailsContainer from "./UserGeneralDetails/UserGeneralDetailsContainer";
import UserAccountDetailsContainer from "./UserAccountDetails/UserAccountDetailsContainer";
import UserProfilePictureContainer from "./UserProfilePicture/UserProfilePictureContainer";
import ConfirmDetails from "../ConfirmDetails/ConfirmDetails";
import SuccessRegistration from "../SuccessRegistration/SuccessRegistration";

function UserFormContainer() {
    const [step, setStep] = useState(1);

    // User General Details
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState(new Date());
    const [city, setCity] = useState("");

    const [firstNameErr, setFirstNameErr] = useState("");
    const [lastNameErr, setLastNameErr] = useState("");
    const [cityErr, setCityErr] = useState("");

    const generalDetailsValues = {
        firstName,
        setFirstName,
        firstNameErr,
        setFirstNameErr,

        lastName,
        setLastName,
        lastNameErr,
        setLastNameErr,

        dateOfBirth,
        setDateOfBirth,

        city,
        setCity,
        cityErr,
        setCityErr
    }

    // User Account Details
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const [emailErr, setEmailErr] = useState("");
    const [passwordErr, setPasswordErr] = useState("");
    const [confirmPasswordErr, setConfirmPasswordErr] = useState("");

    const AccountDetailsValues = {
        userEmail,
        setUserEmail,
        setEmailErr,

        userPassword,
        setUserPassword,
        setPasswordErr,

        passwordConfirm,
        setPasswordConfirm,
        setConfirmPasswordErr,

        emailErr,
        passwordErr,
        confirmPasswordErr
    }

    // User Profile Picture Details
    const [file, setFile] = useState(null);
    const [fileErr, setFileErr] = useState("");

    const ProfilePictureDetails = {
        file,
        setFile,

        fileErr,
        setFileErr
    }

    // All Details
    const AllDetails = {
        "First Name": firstName,
        "Last Name": lastName,
        "Date of Birth": 
            `${dateOfBirth.getDate()}/${dateOfBirth.getMonth()}/${dateOfBirth.getFullYear()}`,
        "City":city,
        "Email":userEmail,
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
                        values={generalDetailsValues}
                    />
                )
            case 2:
                return (
                    // AccountUserDetails
                    <UserAccountDetailsContainer
                        nextStep={nextStep}
                        prevStep={prevStep}
                        values={AccountDetailsValues}
                    />
                )
            case 3:
                return (
                    // ProfilePicture
                    <UserProfilePictureContainer
                        nextStep={nextStep}
                        prevStep={prevStep}
                        values={ProfilePictureDetails}
                    />
                )
            case 4:
                return (
                    // ConfirmInput
                    <ConfirmDetails
                        nextStep={nextStep}
                        prevStep={prevStep}
                        values={AllDetails}
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
