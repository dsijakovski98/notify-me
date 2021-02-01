import React from 'react'
import { CircularProgress, Typography } from '@material-ui/core'
import CompanySubscribeContainer from "../CompanySubscribe/CompanySubscribeContainer";

function CompaniesListPresenter({companiesList, userData}) {
    return (
        <div className="subscribe-page-companies-list-container">
            {
                companiesList === null
                ? 
                    <CircularProgress 
                    style={{
                        width: 100,
                        height: 100,
                        alignSelf: 'center',
                        margin: '0 auto'
                    }}  />
                :
                    companiesList.length > 0
                    ?
                        companiesList.map(company => {
                            return (
                                <CompanySubscribeContainer key={company["company_id"]}
                                companyData={company}
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
