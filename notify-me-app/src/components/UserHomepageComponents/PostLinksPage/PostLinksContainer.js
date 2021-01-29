import "../styles/style.css";
import React from 'react'
import PostLink from "../PostLink/PostLink"
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined'
import OpacityOutlinedIcon from '@material-ui/icons/OpacityOutlined'
import CellWifiOutlinedIcon from '@material-ui/icons/CellWifiOutlined'
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    iconSize: {
        width: 150,
        height: 150,
        color: "whitesmoke",
        "&:hover": {
            filter: 'drop-shadow(0px 0px 5px #3f51b5)',
            cursor: 'pointer'
        }
    }
});


function PostLinksContainer({setPostsPage}) {
    const classes = useStyles();

    return (
        <div className="post-links-container-grid">
        <div className="post-links-container-flex">
            <PostLink 
                displayIcon={<EmojiObjectsOutlinedIcon className={classes.iconSize}/>}
                serviceType="Electricity"
                setPostsPage={setPostsPage}
            />

            <PostLink 
                displayIcon={<OpacityOutlinedIcon className={classes.iconSize} />}
                serviceType="Plumbing"
                setPostsPage={setPostsPage}
            />

            <PostLink 
                displayIcon={<CellWifiOutlinedIcon className={classes.iconSize}/>}
                serviceType="ISP"
                setPostsPage={setPostsPage}
            />
        </div>
    </div>
    )
}

export default PostLinksContainer
