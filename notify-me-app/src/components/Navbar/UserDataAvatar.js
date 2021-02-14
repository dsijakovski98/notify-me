import React, { useState } from 'react'
import { withRouter } from "react-router-dom";
import { Grid, Typography, Avatar, IconButton, Menu, MenuItem } from "@material-ui/core"
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import PowerSettingsNewRoundedIcon from '@material-ui/icons/PowerSettingsNewRounded';
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
      },
      menuItem: {
        '&:hover': {
            backgroundColor: '#aaa'
        },
        padding: '.7em'
      },
      menuItemIcon: {
          marginRight: '0.3em',
          color: '#2F303A',
      }
});


function UserDataAvatar(props) {
    const displayName = props.displayName;
    const profilePicture = props.profilePicture;
    const userData = props.userData;
    const uid = userData.uid;

    const history = props.history;
    const pathname = history.location.pathname;
    const homepage = pathname.includes("company") ? "My Posts" : "Dashboard";
    
    const classes = useStyle();

    const options = [
        homepage,
        "Edit Profile",
        "Log Out"
    ];

   
    const [anchorElement, setAnchorElement] = useState(null);

    const handleClick = (e) => {
        setAnchorElement(e.currentTarget);
    }

    const handleClose = () => {
        setAnchorElement(null);
    }

    const checkRedirect = async () => {
        handleClose();
        // Check account type for redirection
        const isUser = await IsUserLogin(userData.email);
        const redirectPage = isUser ? "user-page" : "company-page";

        history.push(`/notify-me-RST/${redirectPage}`);
    }

    const handleLogout = () => {
        handleClose();
        const promise = logoutUser();
        promise.then(() => {
            history.push("/notify-me-RST/");
        })
    }

    const goToEditProfile = async () => {
        handleClose();
        // Check account type for redirection
        const isUser = await IsUserLogin(userData.email);
        const redirectPage = isUser ? "user" : "company";

        history.push(`/notify-me-RST/edit/${redirectPage}/${uid}`);
    }

    const handleOptionsClick = (option) => {
        switch (option) {
            case options[0]:
                checkRedirect();
                break;
            case options[1]:
                // TODO: Open edit profile modal
                goToEditProfile();
                break;
            case options[2]:
                handleLogout();
                break;
            default:
                break;
        }
    }

    const setMenuIcon = (option) => {
        const homepageIcon = <PersonRoundedIcon className={classes.menuItemIcon} />
        const editProfileIcon = <EditRoundedIcon className={classes.menuItemIcon} />
        const logoutIcon = <PowerSettingsNewRoundedIcon className={classes.menuItemIcon} />

        switch (option) {
            case options[0]:
                return homepageIcon
            case options[1]:
                return editProfileIcon
            case options[2]:
                return logoutIcon
            default:
                break;
        }
    }

    if(!userData) return null;

    return (
        <>
            <Grid container alignItems="center" justify="flex-end">
            <Typography className={classes.displayName} variant="subtitle1">{displayName}</Typography>
            <div>
                <IconButton
                 aria-label="more"
                 aria-controls="long-menu"
                 aria-haspopup="true"
                 onClick={(e) => handleClick(e)}>
                     {/* <MoreVertIcon className={classes.menuButton} />s */}
                     <Avatar
                        className={classes.avatar}
                        classes={{img: classes.avatarImg}}
                        src={profilePicture}
                    />
                </IconButton >
                <Menu
                    id="long-menu"
                    anchorEl={anchorElement}
                    getContentAnchorEl={null}
                    keepMounted
                    open={anchorElement ? true : false}
                    onClose={(e) => handleClose(e)}
                    color="disabled"
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                      }}
                >
                    {
                        options.map(option => {
                            return (
                                <MenuItem className={classes.menuItem}
                                key={option} onClick={() => handleOptionsClick(option)}>
                                    {setMenuIcon(option)}
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
