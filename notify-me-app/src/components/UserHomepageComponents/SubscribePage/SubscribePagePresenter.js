import "../styles/style.css"
import React from 'react'
import CompanySearchFormContainer from "./CompanySearchForm/CompanySearchFormContainer"
import CompaniesListContainer from "./CompaniesList/CompaniesListContainer"

function SubscribePagePresenter({serviceType, companiesList, searchFormData, userData }) {

    return (
        <div className="subscribe-page-container">
            <CompanySearchFormContainer serviceType={serviceType} searchFormData={searchFormData}/>
            <CompaniesListContainer companiesList={companiesList} userData={userData} />
        </div>
    )
}

export default SubscribePagePresenter
