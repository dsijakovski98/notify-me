import React from 'react'
import CompanyPost from './CompanyPost'
import AddPost from "../CompanyAddPost/AddPost";

function CompanyPostsListPresenter({companyPosts, currentCompanyData}) {
    return (
        <>
            <div className="company-posts-list-container">
                {
                    companyPosts.map(post => {
                        return (
                            <CompanyPost key={post["post_id"]} post={post}/>
                        )
                    })
                }
            </div>

            <AddPost currentCompanyData={currentCompanyData}/>
        </>
    )
}

export default CompanyPostsListPresenter
