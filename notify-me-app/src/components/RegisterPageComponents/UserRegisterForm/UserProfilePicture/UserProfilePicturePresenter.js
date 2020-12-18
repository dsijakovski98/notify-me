import "./style/upload_style.css"
import "../../style/style.css";
import React from 'react'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Typography, Button, Avatar, Grid } from '@material-ui/core';


function UserProfilePicturePresenter
({values, continueRegistration, goBackRegistration, uploadFile}) {

    const uploadLabelButton = (
        <div className="upload-container">
            <label id="upload_label">
                <input type="file" onChange={uploadFile}/>
                <span>+</span>
            </label>
        </div>
    );
    const profilePicElement = (
        <div className="upload-container-img">
            <div className="profile-pic-container">
                <img alt="profile-pic" src="https://source.unsplash.com/random">
                </img>
            </div>
            <label id="upload_label">
                <input type="file" onChange={uploadFile}/>
                <span>+</span>
            </label>
        </div>
    );

    return (
        <div className="form-container-flex">
            <div className="form-explanation-container" >
                <Typography variant="h2">
                    Upload a profile picture
                </Typography>
            </div>
            <div className="form-inputs-container">
                <div className="login-form-inputs">
                    <Avatar style={{backgroundColor: '#3f51b5'}}>
                        <LockOutlinedIcon />
                    </Avatar>
                    
                    <Typography component="h1" variant="h5" >Sign up</Typography>
                    <br/>
                    <div id="upload-pic-text">
                        <Typography variant="h6" style={{fontWeight: 300}}>Select your profile picture (optional)</Typography>
                    </div>
                    <br/>
                        {values.file ? profilePicElement : uploadLabelButton}
                        {values.fileErr 
                            ? <Typography variant="body1" color="error">
                                {values.fileErr}
                            </Typography> : null}
                    <br/>
                    <br/>
                    <div className="login-form-submit">
                    <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    onClick={e => goBackRegistration(e)}
                                >
                                    Back
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    color="primary"
                                    onClick={e => continueRegistration(e)}
                                >
                                    {values.file ? "Continue" : "Skip"}
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UserProfilePicturePresenter
