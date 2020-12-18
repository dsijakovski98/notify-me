import { useState } from "react";

const useCompanyServiceDetails = () => {
    // Company Service Details
    const [headCity, setHeadCity] = useState("");
    const [serviceType, setServiceType] = useState("Electricity");
    const [branches, setBranches] = useState([]);

    const [headCityErr, setHeadCityErr] = useState("");

    const serviceDetailsValues = {
        headCity,
        setHeadCity,
        headCityErr,
        setHeadCityErr,

        serviceType,
        setServiceType,

        branches,
        setBranches
    }

    const serviceDetailsParams = {
        "Headquarters": headCity,
        "Service Type": serviceType,
    }

    return [serviceDetailsValues, serviceDetailsParams];
}

export default useCompanyServiceDetails;