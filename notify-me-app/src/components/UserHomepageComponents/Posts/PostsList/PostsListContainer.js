import React, { useContext } from 'react'
import { useUserPostData } from '../../../../customHooks/useUserPostsData';
import PostsListPresenter from "./PostsListPresenter"
import { AuthContext } from "../../../../firebase/auth";
import { useUserPostsList } from '../../../../customHooks/useUserPostsList';

function PostsListContainer({serviceType, userSubscribtions}) {
    const { currentUser } = useContext(AuthContext)
    
    // Array containing only the IDs of the companies the user has subsrcibed (by serviceType)
    const subscribtionIDs = 
    userSubscribtions
    ?   userSubscribtions.length
        ?   userSubscribtions.map(sub => sub.id)
        :   []
    :   null;

    const updatePostsList = (posts, postsData) => {
        let newList = [];

        if(!posts || !postsData) return null
        
        // Update reaa status
        newList = posts.map(post => {
            let readStatus = false;
            let starredStatus = false;

            if(postsData.readPosts.includes(post["post_id"]))
                readStatus = true;

            if(postsData.starredPosts.includes(post["post_id"]))
                starredStatus = true;

            const updatedPost = {
                ...post,
                read: readStatus,
                starred: starredStatus,
                currentUserId: postsData.id
            };

            return updatedPost;
        })

        // Update starred status
        return newList;
    }

    const postsList = useUserPostsList(subscribtionIDs, userSubscribtions);
    
    const userPostsData = useUserPostData(currentUser);

    const updatedPostsList = updatePostsList(postsList, userPostsData);

    return (
        <PostsListPresenter 
        serviceType={serviceType}
        postsList={updatedPostsList} />
    )
}

export default PostsListContainer
