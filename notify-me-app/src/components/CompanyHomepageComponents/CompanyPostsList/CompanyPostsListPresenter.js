import React from 'react'
import CompanyPost from './CompanyPost'
import AddPost from "../CompanyAddPost/AddPost";

function CompanyPostsListPresenter({posts}) {
    return (
        <>
            <div className="company-posts-list-container">
                {
                    posts.map(post => {
                        return (
                            <CompanyPost key={post} post={post}/>
                        )
                    })
                }
            </div>

            <AddPost />
        </>
    )
}

export default CompanyPostsListPresenter
