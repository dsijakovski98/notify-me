import React from 'react'
import { CircularProgress } from '@material-ui/core';
import NoSubscribtions from "../NoSubscribtions";
import PostsListContainer from "../PostsList/PostsListContainer";

function PostsListPagePresenter({serviceType, userSubscribtions}) {
    
    return (
        userSubscribtions
        ?   userSubscribtions.length
            ?   <PostsListContainer serviceType={serviceType} userSubscribtions={userSubscribtions} />
            :   <NoSubscribtions serviceType={serviceType} />
        :   <div className="posts-list-progress">
                <CircularProgress 
                style={{
                    width: 120,
                    height: 120,
                }} />
            </div>
    )
}

export default PostsListPagePresenter
