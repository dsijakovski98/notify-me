import { useState } from "react";

const useCompanyAccountDetails = () => {
    // Company Account Details
    const [companyEmail, setCompanyEmail] = useState("");
    const [companyPassword, setCompanyPassword] = useState("");
    const [companyConfirmPassword, setCompanyConfirmPassword] = useState("");

    const [companyEmailErr, setCompanyEmailErr] = useState("");
    const [companyPasswordErr, setCompanyPasswordErr] = useState("");
    const [companyConfirmPasswordErr, setCompanyConfirmPasswordErr] = useState("");

    const accountDetailsValues = {
        companyEmail,
        setCompanyEmail,
        companyEmailErr,
        setCompanyEmailErr,

        companyPassword,
        setCompanyPassword,
        companyPasswordErr,
        setCompanyPasswordErr,

        companyConfirmPassword,
        setCompanyConfirmPassword,
        companyConfirmPasswordErr,
        setCompanyConfirmPasswordErr
    }

    const accountDetailsParams = {
        "Email": companyEmail
    }

    return [accountDetailsValues, accountDetailsParams];
}

export default useCompanyAccountDetails;