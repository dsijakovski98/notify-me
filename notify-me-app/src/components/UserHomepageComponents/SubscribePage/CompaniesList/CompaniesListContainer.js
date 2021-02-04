import React from 'react';
import CompaniesListPresenter from "./CompaniesListPresenter";

function CompaniesListContainer({companiesList, userSubscribtions}) {

    return (
        <CompaniesListPresenter companiesList={companiesList} userSubscribtions={userSubscribtions} />
    )
}

export default CompaniesListContainer
