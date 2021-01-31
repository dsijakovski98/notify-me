import React from 'react'
import NoSubscribtions from "./NoSubscribtions";

function PostsListPresenter({serviceType, userSubscribtions}) {
    return (
        userSubscribtions ?
            userSubscribtions.length ? 
                <div>
                    You have subscribed to {userSubscribtions.length} companies.
                    Here will be the list of all their posts
                </div>
            : <NoSubscribtions serviceType={serviceType} />
        : null
    )
}

export default PostsListPresenter
