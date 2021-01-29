import React, { useState } from 'react'
import CompanySearchFormPresenter from "./CompanySearchFormPresenter"

function CompanySearchFormContainer({serviceType}) {
    const [companyType, setCompanyType] = useState(serviceType);

    return (
        <CompanySearchFormPresenter 
            companyType={companyType}
            setCompanyType={setCompanyType}/>
    )
}

export default CompanySearchFormContainer
