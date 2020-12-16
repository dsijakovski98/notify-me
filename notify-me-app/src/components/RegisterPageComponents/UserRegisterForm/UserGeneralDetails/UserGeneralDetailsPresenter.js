import React from 'react'
import "../style/style.css";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Typography, TextField, Button, Avatar, Grid } from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';


function UserGeneralDetailsPresenter({ values, continueRegistration }) {

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
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="dense"
                                variant="outlined"
                                required
                                fullWidth
                                label="First Name"
                                autoFocus
                                type="text"
                                error={values.firstNameErr ? true : false}
                                helperText={values.firstNameErr}
                                value={values.firstName}
                                onChange={(e) => values.setFirstName(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="dense"
                                variant="outlined"
                                required
                                fullWidth
                                label="Last Name"
                                type="text"
                                error={values.lastNameErr ? true : false}
                                helperText={values.lastNameErr}
                                value={values.lastName}
                                onChange={(e) => values.setLastName(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    fullWidth
                                    variant="dialog"
                                    format="dd/MM/yyyy"
                                    margin="normal"
                                    label="Date of Birth"
                                    maxDate={new Date()}
                                    value={values.dateOfBirth}
                                    onChange={date => values.setDateOfBirth(date)}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                margin="dense"
                                variant="outlined"
                                required
                                fullWidth
                                label="City"
                                type="text"
                                error={values.cityErr ? true : false}
                                helperText={values.cityErr}
                                value={values.city}
                                onChange={(e) => values.setCity(e.target.value)}
                            />
                        </Grid>               

                    </Grid>
                    <br/>
                    <br/>
                    <br/>
                    <div className="login-form-submit">
                    <Grid container spacing={2} justify="center">
                            <Grid item xs={12} sm={6}>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    color="primary"
                                    onClick={e => continueRegistration(e)}
                                >
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
