import 'date-fns';
import "../styles/style.css";
import React, { useEffect } from 'react';
import { withRouter } from "react-router-dom";
import { useStorageUpload } from "../../../customHooks/useStorage"
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import ChipInput from 'material-ui-chip-input';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Typography, Button, Avatar, InputLabel, CircularProgress } from "@material-ui/core";
import { FormControl, Select, MenuItem, IconButton } from "@material-ui/core";
import { TextField, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { blue } from '@material-ui/core/colors';

import BusinessCenterRoundedIcon from '@material-ui/icons/BusinessCenterRounded';
import AssignmentIndRoundedIcon from '@material-ui/icons/AssignmentIndRounded';
import LanguageRoundedIcon from '@material-ui/icons/LanguageRounded';
import CallRoundedIcon from '@material-ui/icons/CallRounded';

const serviceTypes = ["Electricity", "Plumbing", "ISP"];

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

function CompanyEditProfilePresenter(props) {
    const classes = useStyle();

    const {
        formData,
        editProfile,
        progressBar,
        setProgressBar,
        uploadPicture,
        handleBranchAdd,
        handleBranchRemove,
        handlePhoneNumberChange,
        goBack,
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
            <Typography variant="h3" style={{textAlign: "left", fontWeight: 300, fontSize: '3rem'}}>
                Edit Profile
            </Typography>
             <br/>

            <div className="edit-profile-form">
            <Grid container spacing={2} alignItems="flex-end">

                {/* AVATAR */}
                <Grid item xs={12} sm={4} className="edit-profile-avatar-container">
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

                {/* Date of creation input */}
                <Grid item xs={12} sm={4}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            fullWidth
                            variant="dialog"
                            format="dd/MM/yyyy"
                            placeholder="DD/MM/YYYY"
                            margin="normal"
                            label="Date of incorporation"
                            maxDate={new Date()}
                            value={formData.dateOfCreation}
                            onChange={date => formData.setDateOfCreation(date)}
                        />
                    </MuiPickersUtilsProvider>
                </Grid>

                {/* Service type input */}
                <Grid className="edit-profile-service-type" 
                item xs={12} sm={4} style={{ padding: '1em', textAlign: 'right'}}>
                    <FormControl>
                        <InputLabel htmlFor="serviceType">Service type</InputLabel>
                        <Select 
                        style={{color: '#f5f5f5', paddingTop: formData.serviceType === "ISP" ? '.7em' : 0}}
                            margin="dense"
                            fullWidth
                            variant="standard"
                            id="serviceType"
                            value={formData.serviceType}
                            onChange={(e) => formData.setServiceType(e.target.value)}>
                                {
                                    serviceTypes.map(type => {
                                        return (
                                            <MenuItem key={type} value={type}>
                                                {type}
                                            </MenuItem>
                                        )
                                    })
                                }
                        </Select>
                    </FormControl>
                </Grid>

                {/* Company name input */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        margin="normal"
                        variant="standard"
                        required
                        fullWidth
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <BusinessCenterRoundedIcon style={{color: 'whitesmoke'}} />
                              </InputAdornment>
                            ),
                          }}
                        type="text"
                        label="Company name"
                        error={formData.companyNameErr ? true : false}
                        helperText={formData.companyNameErr}
                        value={formData.companyName}
                        onChange={(e) => formData.setCompanyName(e.target.value)}
                    />
                </Grid>

                {/* City headquarters input EMPTY SPACE */}
                <Grid item xs={false} sm={6}/>

                {
                    progressBar && 
                    <Grid item xs={12} style={{display: 'flex', justifyContent: 'center'}}>
                        <CircularProgress/>
                    </Grid>
                }

                {/* CEO First name input */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        margin="normal"
                        variant="standard"
                        required
                        fullWidth
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <AssignmentIndRoundedIcon style={{color: 'whitesmoke'}} />
                              </InputAdornment>
                            ),
                          }}
                        type="text"
                        label="CEO First Name"
                        error={formData.ceoFirstErr ? true : false}
                        helperText={formData.ceoFirstErr}
                        value={formData.ceoFirst}
                        onChange={(e) => formData.setCeoFirst(e.target.value)}
                    />
                </Grid>

                {/* CEO Last name input */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        margin="normal"
                        variant="standard"
                        required
                        fullWidth
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <AssignmentIndRoundedIcon style={{color: 'whitesmoke'}} />
                              </InputAdornment>
                            ),
                          }}
                        type="text"
                        label="CEO Last Name"
                        error={formData.ceoLastErr ? true : false}
                        helperText={formData.ceoLastErr}
                        value={formData.ceoLast}
                        onChange={(e) => formData.setCeoLast(e.target.value)}
                    />
                </Grid>

                {/* Branches input */}
                <Grid item xs={12} style={{margin: '1em 0'}}>
                    <>
                    <ChipInput
                        className="chip-input"
                        fullWidth
                        aria-autocomplete={'none'}
                        allowDuplicates={false}
                        value={formData.branches}
                        placeholder="Branch cities"
                        label="Branch cities"
                        helperText="Press ENTER to add city"
                        onAdd={(city) => handleBranchAdd(city)}
                        onDelete={
                            (city, index) => handleBranchRemove(city, index)
                        }
                    />
                    </>
                </Grid>

                {/* Telephone input */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        margin="normal"
                        variant="standard"
                        fullWidth
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <CallRoundedIcon style={{color: 'whitesmoke'}} />
                            </InputAdornment>
                            ),
                        }}
                        label="Telephone (optional)"
                        type="tel"
                        error={formData.phoneNumberErr.length ? true : false}
                        helperText={formData.phoneNumberErr}
                        value={formData.phoneNumber}
                        onChange={(e) => handlePhoneNumberChange(e.target.value)}
                    />
                </Grid>

                {/* Website input */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        margin="normal"
                        variant="standard"
                        fullWidth
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <LanguageRoundedIcon style={{color: 'whitesmoke'}} />
                            </InputAdornment>
                            ),
                        }}
                        type="url"
                        label="Website (optional)"
                        error={formData.websiteErr ? true : false}
                        helperText={formData.websiteErr}
                        value={formData.website}
                        onChange={(e) => formData.setWebsite(e.target.value)}
                    />
                </Grid>

                {/* BUTTONS */}
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

export default withRouter(CompanyEditProfilePresenter)