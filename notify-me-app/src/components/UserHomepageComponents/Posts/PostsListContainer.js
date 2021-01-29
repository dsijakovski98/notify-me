import React from 'react'
import PostsListPresenter from './PostsListPresenter'

function PostsListContainer({postsPage, setPostsPage}) {
    // Get the list here
    const list = null;

    return (
        <PostsListPresenter postsPage={postsPage} setPostsPage={setPostsPage} list={list}/>
    )
}

export default PostsListContainer
