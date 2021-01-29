import "../styles/style.css"
import React from 'react'
import CompanySearchFormContainer from "./CompanySearchForm/CompanySearchFormContainer"
import CompaniesListContainer from "./CompaniesList/CompaniesListContainer"

function SubscribePagePresenter({serviceType, companiesList }) {

    return (
        <div className="subscribe-page-container">
                <CompanySearchFormContainer serviceType={serviceType}/>
                <CompaniesListContainer companiesList={companiesList}/>
        </div>
    )
}

export default SubscribePagePresenter
