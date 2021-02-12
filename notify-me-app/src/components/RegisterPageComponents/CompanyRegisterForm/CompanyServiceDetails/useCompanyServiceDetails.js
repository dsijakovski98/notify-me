import { useState } from "react";

const useCompanyServiceDetails = () => {
    // Company Service Details
    const [headCity, setHeadCity] = useState("");
    const [serviceType, setServiceType] = useState("Electricity");
    const [branches, setBranches] = useState([]);
    const [phoneNumber, setPhoneNumber] = useState("+389");

    const [headCityErr, setHeadCityErr] = useState("");
    const [phoneNumberErr, setPhoneNumberErr] = useState("");

    const serviceDetailsValues = {
        headCity,
        setHeadCity,
        headCityErr,
        setHeadCityErr,

        serviceType,
        setServiceType,

        branches,
        setBranches,

        phoneNumber,
        setPhoneNumber,
        phoneNumberErr,
        setPhoneNumberErr
    }

    const serviceDetailsParams = {
        "Headquarters": headCity,
        "Service Type": serviceType,
        "Phone number": phoneNumber.trim() !== "+389"  ? phoneNumber : "Not provided"
    }

    return [serviceDetailsValues, serviceDetailsParams];
}

export default useCompanyServiceDetails;