import React, { useState } from 'react'
import { withRouter } from "react-router-dom";
import { Grid, Typography, Avatar, IconButton, Menu, MenuItem } from "@material-ui/core"
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from "@material-ui/core/styles";
import { blue } from '@material-ui/core/colors';
import { logoutUser } from "../../helpers/currentUserManager";
import { IsUserLogin } from "../../helpers/queryManager";

const useStyle = makeStyles({
    avatar: {
        width: 48,
        height: 48,
        margin: '0 auto',
        backgroundColor: blue[800]
      },
      avatarImg: {
        objectFit: 'contain'
      },
      displayName: {
          paddingTop: '0.4em'
      },
      menuButton: {
          color: 'whitesmoke'
      }
});

const options = [
    'Log out'
];

function UserDataAvatar(props) {
    const displayName = props.displayName;
    const profilePicture = props.profilePicture;
    const history = props.history;
    const userData = props.userData;
    const classes = useStyle();
   
    const [anchorElement, setAnchorElement] = useState(null);

    const handleClick = (e) => {
        setAnchorElement(e.currentTarget);
    }

    const handleClose = () => {
        setAnchorElement(null);
    }

    const handleLogout = () => {
        const promise = logoutUser();
        promise.then(() => {
            history.push("/notify-me-RST/");
        })
    }

    const checkRedirect = async () => {
        // Check account type for redirection
        const isUser = await IsUserLogin(userData.email);
        let redirectPage = "";
        
        if(isUser) {
            redirectPage = "user-page";
        }
        else {
            redirectPage = "company-page";

        }

        history.push(`/notify-me-RST/${redirectPage}`);
    }


    return (
        <>
            <Grid container alignItems="center" justify="flex-end">
            <Typography className={classes.displayName} variant="subtitle1">{displayName}</Typography>
            
                <IconButton onClick={() => checkRedirect()}
                style={{marginLeft: '0.2em'}}>
                    <Avatar
                        className={classes.avatar}
                        classes={{img: classes.avatarImg}}
                        src={profilePicture}
                    />
                </IconButton>
            <div>
                <IconButton
                 aria-label="more"
                 aria-controls="long-menu"
                 aria-haspopup="true"
                 onClick={(e) => handleClick(e)}>
                     <MoreVertIcon className={classes.menuButton} />
                </IconButton >
                <Menu
                    id="long-menu"
                    anchorEl={anchorElement}
                    keepMounted
                    open={anchorElement ? true : false}
                    onClose={(e) => handleClose(e)}
                    color="disabled"
                    
                >
                    {
                        options.map(option => {
                            return (
                                <MenuItem key={option} onClick={() => handleLogout()}>
                                    {option}
                                </MenuItem>
                            )
                        })
                    }
                </Menu>
            </div>
            </Grid>
        </>
    )
}

export default withRouter(UserDataAvatar)
