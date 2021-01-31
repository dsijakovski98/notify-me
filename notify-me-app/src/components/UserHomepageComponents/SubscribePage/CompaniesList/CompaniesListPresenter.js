import React from 'react'
import { Typography } from '@material-ui/core'
import CompanySubscribe from "../CompanySubscribe"

function CompaniesListPresenter({companiesList, userData}) {
    return (
        <div className="subscribe-page-companies-list-container">
            {
                companiesList.length ? 
                companiesList.map(company => {
                    return (
                        <CompanySubscribe key={company["company_id"]}
                        companyData={company}
                        // TODO: profilePicture={company.profilePicUrl}
                        profilePicture={null}
                        userData={userData} />
                    )
                })
                : 
                <Typography className="subscribe-page-companies-list-no-results">
                    No results found :(
                </Typography>
            }
        </div>
    )
}

export default CompaniesListPresenter
