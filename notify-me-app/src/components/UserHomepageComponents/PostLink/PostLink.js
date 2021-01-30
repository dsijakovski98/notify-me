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

function PostLink({displayIcon, serviceType}) {
    const classes = useStyles();

    const tooltipTitle = <h1 className={classes.tooltipTitle}>{serviceType}</h1>
    
    return (
           <Link to={`/notify-me-RST/user-page/posts/${serviceType}`}>
            <div className="post-icon">
                        <Tooltip className={classes.tooltipSize}
                        title={tooltipTitle} TransitionComponent={Zoom}>
                            {displayIcon}
                        </Tooltip>
                </div>
            </Link>
    )
}

export default PostLink
