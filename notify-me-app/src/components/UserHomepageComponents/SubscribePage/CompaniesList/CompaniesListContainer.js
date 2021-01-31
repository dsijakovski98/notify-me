import React from 'react';
import CompaniesListPresenter from "./CompaniesListPresenter";

function CompaniesListContainer({companiesList, userData}) {

    return (
        <CompaniesListPresenter companiesList={companiesList} userData={userData} />
    )
}

export default CompaniesListContainer
