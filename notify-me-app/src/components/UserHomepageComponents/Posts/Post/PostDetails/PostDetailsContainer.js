import React from 'react'
import PostDetailsPresenter from "./PostDetailsPresenter"

function PostDetailsContainer({post, postCreator, postTimestamp, postCreatorProfileUrl, handleClose}) {
    return (
        <PostDetailsPresenter 
            post={post}
            postTimestamp={postTimestamp}
            postCreator={postCreator}
            postCreatorProfileUrl={postCreatorProfileUrl}
            handleClose={handleClose}
        />
    )
}

export default PostDetailsContainer
