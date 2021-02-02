import React from 'react'
import Post from "../Post";

function PostsListPresenter({serviceType, userSubscribtions, postsList}) {
    return (
        <div className="posts-list-container">
            {
                postsList.map(post => {
                    return (
                        <Post key={post} post={post}/>
                    )
                })
            }
        </div>
    )
}

export default PostsListPresenter
