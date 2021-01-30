import React from 'react'
import NoSubscribtions from "./NoSubscribtions";

function PostsListPresenter({serviceType, list}) {
    return (
        list 
        ? <div> Posts list...</div>
        : <NoSubscribtions serviceType={serviceType} />
    )
}

export default PostsListPresenter
