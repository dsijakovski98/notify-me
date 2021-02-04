import React from 'react'
import CompanyPostsListPresenter from './CompanyPostsListPresenter'

function CompanyPostsListContainer({companyPosts, currentCompanyData}) {
    return (
        <CompanyPostsListPresenter 
            companyPosts={companyPosts}
            currentCompanyData={currentCompanyData}
        />
    )
}

export default CompanyPostsListContainer
