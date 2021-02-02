import "../styles/style.css"
import React from 'react'
import PanToolRoundedIcon from '@material-ui/icons/PanToolRounded';
import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

function NoSubscribtions({serviceType}) {

    return (
        <div className="no-subscribtions-container">
            <div className="no-subscribtions-icon">
                <PanToolRoundedIcon 
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
                <Link to={"/notify-me-RST/user-page"}>
                    <Button variant="contained" color="default">
                        Go Back
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default NoSubscribtions
