import React, { useContext } from 'react';
import PostsListPagePresenter from './PostsListPagePresenter';
import { withRouter } from "react-router-dom";
import { AuthContext } from "../../../../firebase/auth";
import { useUserSubscribtionsData } from "../../../../customHooks/useUserSubscribtionsData";

function PostsListPageContainer(props) {
    const serviceType = props.match.params.type;

    const { currentUser } = useContext(AuthContext);
    const userSubscribtionData = useUserSubscribtionsData(currentUser);

    // Get the list of posts from companies user has subscribed to here
    const userSubscribtions = userSubscribtionData 
    ?   
        userSubscribtionData.subscribtions.length
        ?   userSubscribtionData.subscribtions.filter(item => item.type === serviceType) 
        :   []

    :   null;


    return (
        <PostsListPagePresenter serviceType={serviceType} userSubscribtions={userSubscribtions} />
    )
}

export default withRouter(PostsListPageContainer)
