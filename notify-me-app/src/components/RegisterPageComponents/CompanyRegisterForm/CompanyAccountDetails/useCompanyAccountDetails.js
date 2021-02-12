import { useState } from "react";

const useCompanyAccountDetails = () => {
    // Company Account Details
    const [companyEmail, setCompanyEmail] = useState("");
    const [companyPassword, setCompanyPassword] = useState("");
    const [companyConfirmPassword, setCompanyConfirmPassword] = useState("");
    const[companyWebsite, setCompanyWebsite] = useState("");

    const [companyEmailErr, setCompanyEmailErr] = useState("");
    const [companyPasswordErr, setCompanyPasswordErr] = useState("");
    const [companyConfirmPasswordErr, setCompanyConfirmPasswordErr] = useState("");
    const[companyWebsiteErr, setCompanyWebsiteErr] = useState("");


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
        setCompanyConfirmPasswordErr,

        companyWebsite,
        setCompanyWebsite,
        companyWebsiteErr,
        setCompanyWebsiteErr

    }

    const accountDetailsParams = {
        "Website": companyWebsite.trim().length ? companyWebsite : "Not provided",
        "Email": companyEmail
    }

    return [accountDetailsValues, accountDetailsParams];
}

export default useCompanyAccountDetails;