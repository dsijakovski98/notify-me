import "../styles/style.css"
import React from 'react'
import { CircularProgress } from "@material-ui/core"
import NoPostsPage from "../NoPostsPage"
import CompanyPostsListContainer from "../CompanyPostsList/CompanyPostsListContainer"

function CompanyHomepagePresenter({posts}) {
    return (
        <div className="company-homepage-container">
            {
                posts
                ?   posts.length
                    ?   <CompanyPostsListContainer posts={posts}/>
                    :   <NoPostsPage />
                :   <div className="company-homepage-progress-bar">
                <CircularProgress style={{width: 120, height: 120}} />
            </div>
            }

            
        </div>
    )
}

export default CompanyHomepagePresenter
