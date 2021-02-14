import "../styles/style.css"
import React from 'react'
import { CircularProgress, Typography } from "@material-ui/core"
import NoPostsPage from "../NoPostsPage"
import CompanyPostsListContainer from "../CompanyPostsList/CompanyPostsListContainer"

function CompanyHomepagePresenter({companyPosts, currentCompanyData}) {
    return (
        <div className="company-homepage-container">

            <div className="company-homepage-title">
                <Typography variant="h2" >
                    My Posts
                </Typography>
                <Typography variant="h4" style={{fontWeight: '200'}}>
                    Browse your posts and create new ones!
                </Typography>
            </div>
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
