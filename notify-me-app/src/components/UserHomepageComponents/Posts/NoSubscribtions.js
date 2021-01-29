import "../styles/style.css"
import React from 'react'
import PanToolIcon from '@material-ui/icons/PanTool';
import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

function NoSubscribtions({serviceType, setPostsPage}) {
    return (
        <div className="no-subscribtions-container">
            <div className="no-subscribtions-icon">
                <PanToolIcon 
                style={{width: 100, height: 100, color: "whitesmoke", marginRight: '2em'}} />
            </div>

            <div className="no-subscribtions-message">
                <Typography variant="h5">
                    Ooops... You haven’t subscribed to any <span>{serviceType}</span> companies yet!
                </Typography>
            </div>
            
            <div className="no-subscribtions-btn">
                <Link to={"/notify-me-RST/subscribe/" + serviceType}>
                    <Button variant="contained" color="primary">
                        Subscribe
                    </Button>
                </Link>
                <Button onClick={() => setPostsPage("")}
                variant="contained" color="info">
                    Go Back
                </Button>
            </div>
        </div>
    )
}

export default NoSubscribtions
