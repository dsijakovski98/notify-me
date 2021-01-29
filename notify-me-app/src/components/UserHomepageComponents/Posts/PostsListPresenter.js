import React from 'react'
import NoSubscribtions from "./NoSubscribtions";

function PostsListPresenter({postsPage, setPostsPage,list}) {
    return (
        list 
        ? <div>{postsPage} posts list...</div>
        : <NoSubscribtions serviceType={postsPage} setPostsPage={setPostsPage}/>
    )
}

export default PostsListPresenter
