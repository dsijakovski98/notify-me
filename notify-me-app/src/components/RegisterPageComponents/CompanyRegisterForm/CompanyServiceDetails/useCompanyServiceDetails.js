import { useState } from "react";

const useCompanyServiceDetails = () => {
    // Company Service Details
    const [headCity, setHeadCity] = useState("");
    const [serviceType, setServiceType] = useState("");
    const [branches, setBranches] = useState([]);

    const [headCityErr, setHeadCityErr] = useState("");
    const [branchesErr, setBranchesErr] = useState("");
    const [serviceTypeErr, setServiceTypeErr] = useState("");

    const serviceDetailsValues = {
        headCity,
        setHeadCity,
        headCityErr,
        setHeadCityErr,

        serviceType,
        setServiceType,
        serviceTypeErr,
        setServiceTypeErr,

        branches,
        setBranches,
        branchesErr,
        setBranchesErr
    }

    const serviceDetailsParams = {
        "Headquarters": headCity,
        "Service Type": serviceType,
    }

    return [serviceDetailsValues, serviceDetailsParams];
}

export default useCompanyServiceDetails;