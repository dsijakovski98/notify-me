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
    const classes = useStyles();

    if(currentUser) {
      profilePicture = currentUser.photoURL;
      displayName = currentUser.displayName;
    }


    return (
        <AppBar className={classes.root} position="sticky">
        <Toolbar>
          <Link to={"/"}>
              <NotificationsActiveIcon color="primary" edge="start" className={classes.navBarIcon}/>
          </Link>

          <Grid container item direction="column"
            className={classes.toolbarTitleGrid}>
            
            <Grid item>
              <Typography variant="h4" className={classes.toolbarTitle}>
                Notify-Me
              </Typography>
            </Grid>

            <Grid item>
                <Typography className={classes.toolbarTitle} variant="body2">
                  Notification app
                </Typography>
            </Grid>


          </Grid>
          {
            currentUser &&
            <UserDataAvatar
              userData={currentUser}
              displayName={displayName}
              profilePicture={profilePicture}
            />
          }

        </Toolbar>
      </AppBar>
    )
}

export default Navbar;
