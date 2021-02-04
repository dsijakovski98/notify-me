import "../styles/style.css"
import React from 'react'
import { CircularProgress } from "@material-ui/core"
import NoPostsPage from "../NoPostsPage"
import CompanyPostsListContainer from "../CompanyPostsList/CompanyPostsListContainer"

function CompanyHomepagePresenter({companyPosts, currentCompanyData}) {
    return (
        <div className="company-homepage-container">
            {
                companyPosts
                ?   companyPosts.length
                    ?   <CompanyPostsListContainer 
                            companyPosts={companyPosts}
                            currentCompanyData={currentCompanyData}
                        />
                    :   <NoPostsPage currentCompanyData={currentCompanyData} />

                :   <div className="company-homepage-progress-bar">
                        <CircularProgress style={{width: 120, height: 120}} />
                    </div>
            }

            
        </div>
    )
}

export default CompanyHomepagePresenter
