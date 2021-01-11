import React, { useContext } from 'react';
import UserDataAvatar from "./UserDataAvatar";
import { AppBar, Toolbar, Typography, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { AuthContext } from "../../firebase/auth";
import defaultPic from "../../images/default-profile-picture.png";

const useStyles = makeStyles({
    root: {
        padding: 5,
        backgroundColor: '#2f303a'
    },
    toolbarTitleGrid: {
      flexGrow: 1,
    },
    toolbarTitle: {
      color: "whitesmoke",
      margin: 0
    },
    navBarIcon: {
      width: 50,
      height: 50,
      marginBottom: 5,
      marginRight: 5
    },
    logoutButton: {
      paddingBottom: 4
    },
    logout: {
      width: 35,
      height: 35,
      size: "medium",
      "&:hover": {
        color: "purple"
      }
    }
  });


function Navbar() {
    const { currentUser } = useContext(AuthContext);
    let profilePicture = defaultPic;
    let displayName = "Unknown";

    if(currentUser) {
      profilePicture = currentUser.photoURL;
      displayName = currentUser.displayName;
    } 

    const classes = useStyles();

    return (
        <AppBar className={classes.root} position="sticky">
        <Toolbar>
          <Link to={"/notify-me-RST"}>
              <NotificationsActiveIcon color="primary" edge="start" className={classes.navBarIcon}/>
          </Link>

          <Grid container item direction="column"
            className={classes.toolbarTitleGrid}>
            
            <Grid item>
            <Link to={"/notify-me-RST"}>
              <Typography variant="h4" className={classes.toolbarTitle}>
                Notify-Me
              </Typography>
            </Link>
            </Grid>

            <Grid item>
              <Link to={"/notify-me-RST"}>
                <Typography className={classes.toolbarTitle} variant="body2">
                  Notification app
                </Typography>
              </Link>
            </Grid>


          </Grid>
          {
            currentUser &&
            <UserDataAvatar
              displayName={displayName}
              profilePicture={profilePicture}
            />
          }

        </Toolbar>
      </AppBar>
    )
}

export default Navbar;
