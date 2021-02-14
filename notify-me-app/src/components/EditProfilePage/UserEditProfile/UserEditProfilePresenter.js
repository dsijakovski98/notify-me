import 'date-fns';
import "../styles/style.css";
import React, { useEffect } from 'react';
import { withRouter } from "react-router-dom";
import { useStorageUpload } from "../../../customHooks/useStorage"
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Typography, Button, Avatar, InputLabel, FormControl } from "@material-ui/core";
import { Select, MenuItem, IconButton, CircularProgress } from "@material-ui/core";
import { TextField, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { blue } from '@material-ui/core/colors';

import FaceRoundedIcon from '@material-ui/icons/FaceRounded';

const genders = ["Male", "Female", "Other"];

const useStyle = makeStyles({
    avatar: {
        width: 160,
        height: 160,
        backgroundColor: blue[800]
      },
      avatarImg: {
        objectFit: 'contain'
      },
});

function UserEditProfilePresenter(props) {
    const classes = useStyle();

    const {
        formData,
        editProfile,
        progressBar,
        setProgressBar,
        uploadPicture,
        goBack
    } = props;

    const { url } = useStorageUpload(formData.file);

    useEffect(() => {
        formData.setProfileUrl("");
        if(url) {
            formData.setProfileUrl(url);
            formData.setFile(null);
            setProgressBar(false);
        }
    }, [url, formData.setFile, formData.setProfileUrl])

    const profilePicture = formData.profileUrl.length
                            ?   formData.profileUrl
                            :   null;



    return (
        <div className="edit-profile-container">
             <Typography variant="h3" style={{textAlign: "left", fontWeight: 300, fontSize: '3rem'}}>Edit Profile</Typography>
             <br/>
            <div className="edit-profile-form">
            <Grid container spacing={2} alignItems="flex-end">
                
                <Grid item xs={12} sm={5} className="edit-profile-avatar-container">
                        <IconButton
                        aria-haspopup="true">
                            <label htmlFor="file-input">
                                <Avatar
                                    style={{cursor: 'pointer'}}
                                    className={classes.avatar}
                                    classes={{img: classes.avatarImg}}
                                    src={profilePicture}
                                />
                                <input onChange={(e) => uploadPicture(e)}
                                accept="image/*" type="file" style={{display:'none'}} id="file-input"/>
                            </label>
                        </IconButton >

                        {
                            formData.profileUrlErr
                            ?   <Typography variant="body2" color="error" style={{textAlign: 'center'}}>
                                {formData.profileUrlErr}
                                </Typography>
                            :   null
                        }
                
                </Grid>

                {/* Date of birth input */}
                <Grid item xs={12} sm={5}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            fullWidth
                            variant="dialog"
                            format="dd/MM/yyyy"
                            placeholder="DD/MM/YYYY"
                            margin="normal"
                            label="Date of Birth"
                            maxDate={new Date()}
                            value={formData.dateOfBirth}
                            onChange={date => formData.setDateOfBirth(date)}
                        />
                    </MuiPickersUtilsProvider>
                </Grid> 

                {/* Gender input */}
                <Grid item xs={12} sm={2} style={{ padding: '1em', textAlign: 'right'}}>
                    <FormControl>
                        <InputLabel htmlFor="genders">Gender</InputLabel>
                        <Select style={{color: '#f5f5f5'}}
                            margin="dense"
                            fullWidth
                            variant="standard"
                            id="genders"
                            value={formData.gender}
                            onChange={(e) => formData.setGender(e.target.value)}>
                                {
                                    genders.map(gender => {
                                        return (
                                            <MenuItem key={gender} value={gender}>
                                                {gender}
                                            </MenuItem>
                                        )
                                    })
                                }
                        </Select>
                    </FormControl>
                </Grid>            

                {
                    progressBar && 
                    <Grid item xs={12} style={{display: 'flex', justifyContent: 'center'}}>
                        <CircularProgress/>
                    </Grid>
                }


                {/* First name input */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        margin="normal"
                        variant="standard"
                        required
                        fullWidth
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <FaceRoundedIcon style={{color: 'whitesmoke'}} />
                              </InputAdornment>
                            ),
                          }}
                        type="text"
                        label="First Name"
                        error={formData.firstNameErr ? true : false}
                        helperText={formData.firstNameErr}
                        value={formData.firstName}
                        onChange={(e) => formData.setFirstName(e.target.value)}
                    />
                </Grid>

                {/* Last name input */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        margin="normal"
                        variant="standard"
                        required
                        fullWidth
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <FaceRoundedIcon style={{color: 'whitesmoke'}} />
                              </InputAdornment>
                            ),
                          }}
                        type="text"
                        label="Last Name"
                        error={formData.lastNameErr ? true : false}
                        helperText={formData.lastNameErr}
                        value={formData.lastName}
                        onChange={(e) => formData.setLastName(e.target.value)}
                    />
                </Grid>
                
                <Grid container spacing={2} justify="flex-end" style={{margin: '1em 0'}}>
                            <Grid item xs={12} sm={6}>
                                    <Button
                                        onClick={() => goBack()}
                                        style={{padding: '.8em 0'}}
                                        variant="contained"
                                        fullWidth
                                        color="default">
                                        Back
                                    </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button
                                    style={{padding: '.8em 0'}}
                                    variant="contained"
                                    fullWidth
                                    color="primary"
                                    onClick={e => editProfile(e)}>
                                    Edit profile
                                </Button>
                            </Grid>
                            
                </Grid>

            </Grid>
            </div>
        </div>
    )
}

export default withRouter(UserEditProfilePresenter)
