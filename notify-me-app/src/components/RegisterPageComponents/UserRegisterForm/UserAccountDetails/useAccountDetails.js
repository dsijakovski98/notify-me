import { useState } from 'react';

const useAccountDetails = () => {
    // User Account Details
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const [emailErr, setEmailErr] = useState("");
    const [passwordErr, setPasswordErr] = useState("");
    const [confirmPasswordErr, setConfirmPasswordErr] = useState("");

    const accountDetailsValues = {
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

    const accountDetailsParams = {
        "Email": userEmail
    }

    return [accountDetailsValues, accountDetailsParams];
}

export default useAccountDetails;