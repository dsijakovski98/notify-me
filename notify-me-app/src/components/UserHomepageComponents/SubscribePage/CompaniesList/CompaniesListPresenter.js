import React from 'react'
import CompanySubscribe from "../CompanySubscribe"

function CompaniesListPresenter({companiesList}) {
    return (
        <div className="subscribe-page-companies-list-container">
            {
                companiesList.map(company => {
                    return (
                        <CompanySubscribe key={company} name={"Company name"}/>
                    )
                })
            }
        </div>
    )
}

export default CompaniesListPresenter
