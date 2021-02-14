import "../../style/upload_style/style.css";
import "../../style/style.css";
import React from 'react'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Typography, Button, Avatar, Grid } from '@material-ui/core';
import ProgressBar from "../../ProgressBar/ProgressBar";


function UserProfilePicturePresenter
({values, continueRegistration, goBackRegistration, uploadFile}) {

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

                    <div className="upload-container-img">
                        <div className="profile-pic-container">

                            {
                                values.imageSource 
                                && 
                                <img alt="profile" src={values.imageSource}>
                                </img>
                            }

                            <ProgressBar
                                file={values.file}
                                setFile={values.setFile}
                                setImageSource={values.setImageSource}
                            />

                        </div>
                    </div>
                    
                    <div className="upload-container">
                        <label id="upload_label">
                            <input type="file" onChange={uploadFile}/>
                            <span>+</span>
                        </label>
                    </div>

                        {
                            values.fileErr 
                            ?   <Typography variant="body1" color="error">
                                    {values.fileErr}
                                </Typography>
                            :   null
                        }

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
                                    {values.imageSource ? "Continue" : "Skip"}
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
