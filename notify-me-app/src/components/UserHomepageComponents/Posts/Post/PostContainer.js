import React from 'react'
import PostPresenter from './PostPresenter'
import { POSTS_TABLE_COLUMNS } from "../../../../firebase/tables"
import { readPost, starPost } from "../../../../helpers/databaseAdd";
import { unreadPost, unstarPost } from "../../../../helpers/databaseRemove";
import moment from "moment";
import { dateTimeFormat } from "../../../../helpers/validators"

function PostContainer({post}) {

    const postDate = new Date(post["created_on"].toDate());

    const postTimestamp = moment(postDate).format(dateTimeFormat);
    const postCreator = post[POSTS_TABLE_COLUMNS.CREATOR_NAME];
    const postCreatorProfileUrl = post[POSTS_TABLE_COLUMNS.CREATOR_PROFILE_URL];

    const toggleReadPost = () => {
        if(!post.read) {
            // Read post
            readPost(post.currentUserId, post["post_id"]);
        }
        else {
            // Unread post
            unreadPost(post.currentUserId, post["post_id"]);
        }
    };

    const toggleStarPost = () => {
        if(!post.starred) {
            // Star post
            starPost(post.currentUserId, post["post_id"]);
        }
        else {
            // Unstar post
            unstarPost(post.currentUserId, post["post_id"]);
        }
    };

    // console.log(post);

    return (
        <PostPresenter 
        post={post}
        postTimestamp={postTimestamp}
        postCreator={postCreator}
        postCreatorProfileUrl={postCreatorProfileUrl}
        toggleReadPost={toggleReadPost}
        toggleStarPost={toggleStarPost} />
    )
}

export default PostContainer
