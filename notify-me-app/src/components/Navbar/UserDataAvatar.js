import React, { useState } from 'react'
import { Link, withRouter } from "react-router-dom";
import { Grid, Typography, Avatar, IconButton, Menu, MenuItem } from "@material-ui/core"
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from "@material-ui/core/styles";
import { blue } from '@material-ui/core/colors';
import { logoutUser } from "../../helpers/currentUserManager";

const useStyle = makeStyles({
    avatar: {
        width: 48,
        height: 48,
        marginLeft: '.8em',
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


    return (
        <>
            <Grid container alignItems="center" justify="flex-end">
            <Typography className={classes.displayName} variant="subtitle1">{displayName}</Typography>
            
            <Link to={"/notify-me-RST/user-page"}>
                <Avatar
                    className={classes.avatar}
                    classes={{img: classes.avatarImg}}
                    src={profilePicture}
                />
            </Link>
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
