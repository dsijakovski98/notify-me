import "../../styles/style.css"
import React from 'react'
import { Link } from "react-router-dom"
import PanToolRoundedIcon from '@material-ui/icons/PanToolRounded';
import { Button, Typography } from "@material-ui/core"

function NoPosts({serviceType}) {
    return (
        <div className="posts-list-no-posts-container">

            <div className="no-subscribtions-icon">
                <PanToolRoundedIcon 
                style={{width: 100, height: 100, color: "whitesmoke", marginRight: '2em'}} />
            </div>

            <div className="posts-list-no-posts-message">
                <Typography variant="h4" style={{textAlign: 'center'}}>
                   Sorry, the companies you've subcribed to have no posts yet 😞
                </Typography>
            </div>

            <div className="posts-list-no-posts-buttons">
                <Link to={"/notify-me-RST/user-page"}>
                    <Button variant="contained" color="default">
                        Go back
                    </Button>
                </Link>

                <Link to={`/notify-me-RST/subscribe/${serviceType}`}>
                    <Button variant="contained" color="primary">
                        Subscribe
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default NoPosts
