import React from 'react'
import CompanyDetailsModalPresenter from "./CompanyDetailsModalPresenter";

function CompanyDetailsModalContainer({company, handleClose}) {
    return (
        <CompanyDetailsModalPresenter 
            company={company}
            handleClose={handleClose}
        />
    )
}

export default CompanyDetailsModalContainer
