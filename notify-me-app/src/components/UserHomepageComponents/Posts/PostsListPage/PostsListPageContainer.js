import React, { useContext } from 'react';
import PostsListPagePresenter from './PostsListPagePresenter';
import { withRouter } from "react-router-dom";
import { AuthContext } from "../../../../firebase/auth";
import { useUserData } from "../../../../customHooks/useUserData";

function PostsListPageContainer(props) {
    const serviceType = props.match.params.type;

    const { currentUser } = useContext(AuthContext);
    const userData = useUserData(currentUser);

    // Get the list of posts from companies user has subscribed to here
    const userSubscribtions = userData 
    ?   
        userData.subscribtions.length
        ?   userData.subscribtions.filter(item => item.type === serviceType) 
        :   []

    :   null;


    return (
        <PostsListPagePresenter serviceType={serviceType} userSubscribtions={userSubscribtions} />
    )
}

export default withRouter(PostsListPageContainer)
