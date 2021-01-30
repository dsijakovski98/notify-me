import React from 'react'
import PostsListPresenter from './PostsListPresenter'
import { withRouter } from "react-router-dom";

function PostsListContainer(props) {
    const serviceType = props.match.params.type;

    // Get the list of posts from companies user has subscribed to here
    const list = null;

    return (
        <PostsListPresenter serviceType={serviceType} list={list}/>
    )
}

export default withRouter(PostsListContainer)
