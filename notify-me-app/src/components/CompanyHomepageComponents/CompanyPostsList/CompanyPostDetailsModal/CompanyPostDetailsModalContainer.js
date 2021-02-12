import React from 'react'
import CompanyPostDetailsModalPresenter from "./CompanyPostDetailsModalPresenter";

function CompanyPostDetailsModalContainer({post, postTimestamp, handleClose}) {
    return (
            <CompanyPostDetailsModalPresenter 
                post={post}
                postTimestamp={postTimestamp}
                handleClose={handleClose}
            />
    )
}

export default CompanyPostDetailsModalContainer
