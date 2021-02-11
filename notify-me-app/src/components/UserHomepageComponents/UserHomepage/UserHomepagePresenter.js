import "../styles/style.css";
import React from 'react'
import PostLink from "../PostLink/PostLink"
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined'
import OpacityOutlinedIcon from '@material-ui/icons/OpacityOutlined'
import CellWifiOutlinedIcon from '@material-ui/icons/CellWifiOutlined'
import { Link } from "react-router-dom";
import { Fab } from '@material-ui/core';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import { makeStyles, Typography } from "@material-ui/core"

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

const defaultServiceType = "Electricity";

function UserHomepagePresenter() {
    const classes = useStyles();

    return (
        <div className="user-homepage-container">

            <div className="user-homepage-title">
                <Typography variant="h2" >
                    Dashboard
                </Typography>
                <Typography variant="h4" style={{fontWeight: '200'}}>
                    Select a company type to find out more about them!
                </Typography>
            </div>

            <div className="post-links-container-grid">
                <div className="post-links-container-flex">
                    <PostLink 
                        displayIcon={<EmojiObjectsOutlinedIcon className={classes.iconSize}/>}
                        serviceType="Electricity"
                    />

                    <PostLink 
                        displayIcon={<OpacityOutlinedIcon className={classes.iconSize} />}
                        serviceType="Plumbing"
                    />

                    <PostLink 
                        displayIcon={<CellWifiOutlinedIcon className={classes.iconSize}/>}
                        serviceType="ISP"
                    />
                </div>

        </div>
    
            <div className="posts-list-add-subscribtion">
                <Link to={"/notify-me-RST/subscribe/" + defaultServiceType}>
                    <Fab color="primary" size="large" style={{padding: '2.8em'}}>
                        <AddRoundedIcon style={{width: 35, height: 35}} />
                    </Fab>
                </Link>
            </div>
    </div>
    )
}

export default UserHomepagePresenter