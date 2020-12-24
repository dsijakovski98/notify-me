import React from 'react'
import { Tooltip, Zoom } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
        <div className="post-icon">
                <Tooltip className={classes.tooltipSize}
                title={tooltipTitle} TransitionComponent={Zoom}>
                    {displayIcon}
                </Tooltip>
        </div>
    )
}

export default PostLink
