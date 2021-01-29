import React from 'react'
import { Tooltip, Zoom } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    tooltipTitle: {
        padding: '0.5em',
        fontWeight: 300
    }
})

function PostLink({displayIcon, serviceType, setPostsPage}) {
    const classes = useStyles();

    const tooltipTitle = <h1 className={classes.tooltipTitle}>{serviceType}</h1>
    
    return (
            <div onClick={() => setPostsPage(serviceType)} className="post-icon">
                    <Tooltip className={classes.tooltipSize}
                    title={tooltipTitle} TransitionComponent={Zoom}>
                        {displayIcon}
                    </Tooltip>
            </div>
    )
}

export default PostLink
