import { useState, useEffect } from "react";
import { COMPANY_TABLE_COLUMNS } from "../../../firebase/tables";

const useCompanyFormData = (companyData) => {

    const [ceoFirst, setCeoFirst] = useState("");
    const [ceoLast, setCeoLast] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [cityHead, setCityHead] = useState("");
    const [dateOfCreation, setDateOfCreation] = useState(null);
    const [serviceType, setServiceType] = useState("");
    const [branches, setBranches] = useState([]);
    const [phoneNumber, setPhoneNumber] = useState("+389");
    const [website, setWebsite] = useState("");
    const [profileUrl, setProfileUrl] = useState("");

    const [ceoFirstErr, setCeoFirstErr] = useState("");
    const [ceoLastErr, setCeoLastErr] = useState("");
    const [companyNameErr, setCompanyNameErr] = useState("");
    const [cityHeadErr, setCityHeadErr] = useState("");
    const [phoneNumberErr, setPhoneNumberErr] = useState("");
    const [websiteErr, setWebsiteErr] = useState("");
    const [profileUrlErr, setProfileUrlErr] = useState("");

    useEffect(() => {
        if(!companyData) return;

        setCeoFirst(companyData[COMPANY_TABLE_COLUMNS.CEO_FIRST_NAME]);
        setCeoLast(companyData[COMPANY_TABLE_COLUMNS.CEO_LAST_NAME]);
        setCompanyName(companyData[COMPANY_TABLE_COLUMNS.COMPANY_NAME]);
        setCityHead(companyData[COMPANY_TABLE_COLUMNS.HEADQUARTERS_CITY]);
        setDateOfCreation(companyData[COMPANY_TABLE_COLUMNS.DATE_OF_CREATION].toDate());
        setServiceType(companyData[COMPANY_TABLE_COLUMNS.SERVICE_TYPE]);
        setBranches(companyData[COMPANY_TABLE_COLUMNS.BRANCHES]);
        
        const number = companyData[COMPANY_TABLE_COLUMNS.PHONE_NUMBER];
        if (number !== "Not Provided")  setPhoneNumber(number);

        const website = companyData[COMPANY_TABLE_COLUMNS.WEBSITE];
        if (website !== "Not Provided") setWebsite(website);
        setProfileUrl(companyData[COMPANY_TABLE_COLUMNS.PROFILE_URL]);

    }, [companyData]);

    return companyData
            ?   {
                    ceoFirst,
                    setCeoFirst,
                    ceoFirstErr,
                    setCeoFirstErr,
        
                    ceoLast,
                    setCeoLast,
                    ceoLastErr,
                    setCeoLastErr,
        
                    companyName,
                    setCompanyName,
                    companyNameErr,
                    setCompanyNameErr,
        
                    cityHead,
                    setCityHead,
                    cityHeadErr,
                    setCityHeadErr,
        
                    dateOfCreation,
                    setDateOfCreation,
                    
                    serviceType,
                    setServiceType,
        
                    branches,
                    setBranches,
                    
                    phoneNumber,
                    setPhoneNumber,
                    phoneNumberErr,
                    setPhoneNumberErr,
        
                    website,
                    setWebsite,
                    websiteErr,
                    setWebsiteErr,
        
                    profileUrl,
                    setProfileUrl,
                    profileUrlErr,
                    setProfileUrlErr
                }
            :   null;

}

export { useCompanyFormData };