import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Grid, Avatar, IconButton } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { AuthContext } from "../../firebase/auth";
import defaultPic from "../../images/default-profile-picture.png";
import { blue } from '@material-ui/core/colors';
import {logoutUser} from "../../helpers/currentUserManager";
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

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
    avatar: {
      width: 48,
      height: 48,
      marginLeft: '0.5em',
      backgroundColor: blue[800]
    },
    avatarImg: {
      objectFit: 'contain'
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

function Navbar(props) {
    const { currentUser } = useContext(AuthContext);
    let profilePicture = defaultPic;
    let displayName = "Unknown";

    if(currentUser) {
      profilePicture = currentUser.photoURL;
      displayName = currentUser.displayName;
      console.log(currentUser);
    } 

    const classes = useStyles();

    const logout = () => {
      logoutUser();
      props.history.push("/notify-me-RST/");
    }

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
            <>
              <Grid container alignItems="flex-end" justify="flex-end">
                <Typography variant="subtitle1">{displayName}</Typography>
                <Avatar
                  className={classes.avatar}
                  classes={{img: classes.avatarImg}}
                  src={profilePicture} />
                <IconButton className={classes.logoutButton}
                  onClick={() => logout()}
                >
                    <ExitToAppOutlinedIcon 
                    className={classes.logout}
                    color="primary" />
                </IconButton>
              </Grid>
              </>
          }

        </Toolbar>
      </AppBar>
    )
}

export default withRouter(Navbar);
