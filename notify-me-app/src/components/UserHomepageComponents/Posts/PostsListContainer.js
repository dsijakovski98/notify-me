import React, { useContext } from 'react';
import PostsListPresenter from './PostsListPresenter';
import { withRouter } from "react-router-dom";
import { AuthContext } from "../../../firebase/auth";
import { useUserData } from "../../../customHooks/useUserData";

function PostsListContainer(props) {
    const serviceType = props.match.params.type;

    const { currentUser } = useContext(AuthContext);
    const userData = useUserData(currentUser);
    console.log(userData);

    // Get the list of posts from companies user has subscribed to here
    const userSubscribtions = userData ? userData.subscribtions : [];

    return (
        <PostsListPresenter serviceType={serviceType} userSubscribtions={userSubscribtions} />
    )
}

export default withRouter(PostsListContainer)
