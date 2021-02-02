import React from 'react'
import CompanyPostsListPresenter from './CompanyPostsListPresenter'

function CompanyPostsListContainer({posts}) {
    return (
        <CompanyPostsListPresenter posts={posts} />
    )
}

export default CompanyPostsListContainer
