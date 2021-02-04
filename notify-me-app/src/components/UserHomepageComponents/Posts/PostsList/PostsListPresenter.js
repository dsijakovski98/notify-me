import React from 'react'
import PostContainer from "../Post/PostContainer";
import { Link } from "react-router-dom";
import { CircularProgress, Fab } from '@material-ui/core';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import NoPosts from "./NoPosts";

function PostsListPresenter({serviceType, postsList}) {

    const postsGrid = postsList ? (
        <div className="posts-list-container">
            {  
                postsList.map(post => {
                    return (
                        <PostContainer key={post["post_id"]} post={post} />
                    )
                })
            }

            <div className="posts-list-add-subscribtion">
                <Link to={"/notify-me-RST/subscribe/" + serviceType}>
                    <Fab color="primary" size="large" style={{padding: '2.8em'}}>
                        <AddRoundedIcon style={{width: 35, height: 35}} />
                    </Fab>
                </Link>
            </div>
        </div>
    ) : null;

    const progressBar = (
        <div className="posts-list-progress" >
            <CircularProgress
                style={{
                width: 120,
                height: 120,
            }} />
        </div>
    );


    return (
                postsList
                ?
                    postsList.length
                    ?   postsGrid
                    :   <NoPosts serviceType={serviceType} />
                :   progressBar
    )
}

export default PostsListPresenter
