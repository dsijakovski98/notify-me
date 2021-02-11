import { useState } from "react";
import moment from "moment";
import { dateFormat } from "../../../../helpers/validators";

const useCompanyGeneralDetails = () => {
    // Company General Details
    const [companyName, setCompanyName] = useState("");
    const [companyStartDate, setCompanyStartDate] = useState(new Date());
    const [companyFounderFirstName, setCompanyFounderFirstName] = useState("");
    const [companyFounderLastName, setCompanyFounderLastName] = useState("");

    const [companyNameErr, setCompanyNameErr] = useState("");
    const [companyFounderFirstNameErr, setCompanyFounderFirstNameErr] = useState("");
    const [companyFounderLastNameErr, setCompanyFounderLastNameErr] = useState("");


    const generalDetailsValues = {
        companyName,
        setCompanyName,
        companyNameErr,
        setCompanyNameErr,

        companyStartDate,
        setCompanyStartDate,

        companyFounderFirstName,
        setCompanyFounderFirstName,
        companyFounderFirstNameErr,
        setCompanyFounderFirstNameErr,

        companyFounderLastName,
        setCompanyFounderLastName,
        companyFounderLastNameErr,
        setCompanyFounderLastNameErr,
    }

    const generalDetailsParams = {
        "Company Name": companyName,
        "Date of Incorporation":
            companyStartDate ? 
            moment(companyStartDate).format(dateFormat)
            : "",
        "Founder Name": `${companyFounderFirstName} ${companyFounderLastName}`,
    }

    return [generalDetailsValues, generalDetailsParams];
}

export default useCompanyGeneralDetails;