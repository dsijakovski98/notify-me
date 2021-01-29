import React from 'react'
import PostLinksContainer from "../PostLinksPage/PostLinksContainer";
import PostsListContainer from '../Posts/PostsListContainer';

function UserHomepagePresenter({postsPage, setPostsPage}) {

    return (
        postsPage 
        ? <PostsListContainer postsPage={postsPage} setPostsPage={setPostsPage}/> 
        : <PostLinksContainer setPostsPage={setPostsPage}/>
    )
}

export default UserHomepagePresenter