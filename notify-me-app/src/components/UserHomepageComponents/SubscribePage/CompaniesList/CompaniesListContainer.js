import React from 'react'
import CompaniesListPresenter from "./CompaniesListPresenter";

function CompaniesListContainer({companiesList}) {
    return (
        <CompaniesListPresenter companiesList={companiesList} />
    )
}

export default CompaniesListContainer
