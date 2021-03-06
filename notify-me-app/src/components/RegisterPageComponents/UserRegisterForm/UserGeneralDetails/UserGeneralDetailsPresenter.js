import React from 'react'
import "../../style/style.css";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { Link } from "react-router-dom";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Typography, TextField, Button, Avatar, Grid, Select, MenuItem, InputLabel, FormControl }
 from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';


function UserGeneralDetailsPresenter({ values, continueRegistration, genders }) {

    return (
        <div className="form-container-flex">
            <div className="form-explanation-container">
                <Typography variant="h2">
                    Enter user details
                </Typography>
            </div>
            <div className="form-inputs-container">
                <div className="login-form-inputs">
                    <Avatar style={{backgroundColor: '#3f51b5'}}>
                        <LockOutlinedIcon />
                    </Avatar>
                    
                    <Typography component="h1" variant="h5" >Sign up</Typography>
                    <br/>
                    <Grid container spacing={2} alignItems="center" justify="flex-end">
                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="dense"
                                variant="standard"
                                required
                                autoFocus
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
                                error={values.firstNameErr ? true : false}
                                helperText={values.firstNameErr}
                                value={values.firstName}
                                onChange={(e) => values.setFirstName(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="dense"
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
                                error={values.lastNameErr ? true : false}
                                helperText={values.lastNameErr}
                                value={values.lastName}
                                onChange={(e) => values.setLastName(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    fullWidth
                                    variant="dialog"
                                    format="dd/MM/yyyy"
                                    placeholder="DD/MM/YYYY"
                                    margin="normal"
                                    label="Date of Birth"
                                    maxDate={new Date()}
                                    value={values.dateOfBirth}
                                    onChange={date => values.setDateOfBirth(date)}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="dense"
                                variant="standard"
                                required
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <LocationOnRoundedIcon style={{color: 'whitesmoke'}} />
                                      </InputAdornment>
                                    ),
                                  }}
                                type="text"
                                label="City"
                                error={values.cityErr ? true : false}
                                helperText={values.cityErr}
                                value={values.city}
                                onChange={(e) => values.setCity(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={8} sm={6}>
                        <FormControl>
                            <InputLabel htmlFor="genders">Gender</InputLabel>
                            <Select style={{color: '#f5f5f5'}}
                                margin="dense"
                                fullWidth
                                variant="standard"
                                id="genders"
                                value={values.gender}
                                onChange={(e) => values.setGender(e.target.value)}
                            >
                                {genders.map(gender => {
                                    return (
                                        <MenuItem key={gender} value={gender}>
                                            {gender}
                                        </MenuItem>
                                    )
                                })}
                            </Select>
                        </FormControl>
                        </Grid>            

                    </Grid>
                    <br/>
                    <br/>
                    <br/>
                    <div className="login-form-submit">
                    <Grid container spacing={2} justify="center">
                            <Grid item xs={12} sm={6}>
                                <Link to={"/"}>
                                    <Button
                                        variant="contained"
                                        fullWidth
                                        color="default">
                                        Back
                                    </Button>
                                </Link>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    color="primary"
                                    onClick={e => continueRegistration(e)}>
                                    Continue
                                </Button>
                            </Grid>
                            
                        </Grid>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UserGeneralDetailsPresenter;
