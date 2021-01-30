import React, { useState } from 'react'
import CompanySearchFormPresenter from "./CompanySearchFormPresenter"

function CompanySearchFormContainer({serviceType, searchFormData}) {

    const [name, setName] = useState("");
    const [type, setType] = useState(serviceType);

    const updateData = () => {
        searchFormData.setCompanyName(name);
        searchFormData.setCompanyType(type);
    }

    const helperFormData = {
        name,
        setName,
        type,
        setType
    }

    return (
        <CompanySearchFormPresenter
            companyType={serviceType}
            helperFormData={helperFormData}
            updateData={updateData}
            />
    )
}

export default CompanySearchFormContainer
