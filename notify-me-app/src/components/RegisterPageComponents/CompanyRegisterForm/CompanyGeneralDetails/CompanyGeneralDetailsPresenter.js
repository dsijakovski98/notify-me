import React from 'react';
import "../../style/style.css";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Typography, TextField, Button, Avatar, Grid } from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';



function CompanyGeneralDetailsPresenter({values, continueRegistration}) {
    return (
        <div className="form-container-flex">
            <div className="form-explanation-container">
                <Typography variant="h2">
                    Enter company details
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
                        <Grid item xs={12}>
                            <TextField
                                margin="dense"
                                variant="outlined"
                                required
                                fullWidth
                                label="Company Name"
                                type="text"
                                error={values.companyNameErr ? true : false}
                                helperText={values.companyNameErr}
                                value={values.companyName}
                                onChange={(e) => values.setCompanyName(e.target.value)}
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
                                    label="Date of Incorporation"
                                    maxDate={new Date()}
                                    value={values.companyStartDate}
                                    onChange={date => values.setCompanyStartDate(date)}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="dense"
                                variant="outlined"
                                required
                                fullWidth
                                label="CEO First Name"
                                autoFocus
                                type="text"
                                error={
                                    values.companyFounderFirstNameErr 
                                    ? true : false
                                }
                                helperText={
                                    values.companyFounderFirstNameErr
                                }
                                value={values.companyFounderFirstName}
                                onChange={(e) =>
                                    values.setCompanyFounderFirstName(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="dense"
                                variant="outlined"
                                required
                                fullWidth
                                label="CEO Last Name"
                                type="text"
                                error={
                                    values.companyFounderLastNameErr 
                                    ? true : false
                                }
                                helperText={
                                    values.companyFounderLastNameErr
                                }
                                value={values.companyFounderLastName}
                                onChange={(e) =>
                                    values.setCompanyFounderLastName(e.target.value)}
                            />
                        </Grid>              

                    </Grid>
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

export default CompanyGeneralDetailsPresenter
