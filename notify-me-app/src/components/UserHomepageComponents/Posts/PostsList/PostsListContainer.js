import React from 'react'
import PostsListPresenter from "./PostsListPresenter"

function PostsListContainer({serviceType, userSubscribtions}) {
    // TODO: Get posts from userSubscribtions here
    const postsList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    // TODO: Add info read or not read from user data
    
    return (
        <PostsListPresenter 
        serviceType={serviceType}
        userSubscribtions={userSubscribtions}
        postsList={postsList} />
    )
}

export default PostsListContainer
