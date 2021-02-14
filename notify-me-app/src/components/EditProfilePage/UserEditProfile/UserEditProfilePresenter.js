import "../styles/style.css";
import React from 'react';
import { withRouter } from "react-router-dom";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Typography, Button, Avatar, InputLabel, FormControl, Select, MenuItem, IconButton } from "@material-ui/core";
import { TextField, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { blue } from '@material-ui/core/colors';
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

function UserEditProfilePresenter({formData, editProfile, history}) {
    const classes = useStyle();

    const profilePicture = formData.profileUrl.length
                            ?   formData.profileUrl
                            :   null;

    const goBack = () => {
        history.goBack();
    }

    return (
        <div className="edit-profile-container">
             <Typography variant="h3" style={{textAlign: "left", fontWeight: 300, fontSize: '3rem'}}>Edit Profile</Typography>
             <br/>
            <div className="edit-profile-form">
            <Grid container spacing={2} alignItems="flex-end">
                
                <Grid item xs={12} sm={4} className="edit-profile-avatar-container">
                    <IconButton
                    aria-haspopup="true">
                        <Avatar
                            className={classes.avatar}
                            classes={{img: classes.avatarImg}}
                            src={profilePicture}
                        />
                    </IconButton >
                </Grid>

                {/* Date of birth input */}
                <Grid item xs={12} sm={6}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            fullWidth
                            variant="dialog"
                            format="dd/MM/yyyy"
                            placeholder="DD/MM/YYYY"
                            margin="normal"
                            label="Date of Birth"
                            maxDate={new Date()}
                            value={formData.dateOfCreation}
                            onChange={date => formData.setDateOfCreation(date)}
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


                {/* First name input */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        margin="normal"
                        variant="standard"
                        required
                        fullWidth
                        // InputProps={{
                        //     startAdornment: (
                        //       <InputAdornment position="start">
                        //         <VpnKeyRoundedIcon style={{color: 'whitesmoke'}} />
                        //       </InputAdornment>
                        //     ),
                        //   }}
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
