import React from 'react';
import "../../style/style.css";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Typography, TextField, Button, Avatar, Grid } from '@material-ui/core';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import VpnKeyRoundedIcon from '@material-ui/icons/VpnKeyRounded';
import LanguageRoundedIcon from '@material-ui/icons/LanguageRounded';


function CompanyAccountDetailsPresenter({values, continueRegistration, goBackRegistration}) {
    return (
        <div className="form-container-flex">
            <div className="form-explanation-container">
                <Typography variant="h2">
                    Enter company account details
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
                
                        {/* Email input */}
                        <Grid item xs={12}>
                            <TextField
                                margin="normal"
                                variant="standard"
                                required
                                fullWidth
                                autoFocus
                                InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <EmailRoundedIcon style={{color: 'whitesmoke'}} />
                                      </InputAdornment>
                                    ),
                                  }}
                                label="Company Email"
                                type="email"
                                error={values.companyEmailErr ? true : false}
                                helperText={values.companyEmailErr}
                                value={values.companyEmail}
                                onChange={(e) => values.setCompanyEmail(e.target.value)}
                            />
                        </Grid>   

                        {/* Password input */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="normal"
                                variant="standard"
                                required
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <VpnKeyRoundedIcon style={{color: 'whitesmoke'}} />
                                      </InputAdornment>
                                    ),
                                  }}
                                label="Password"
                                type="password"
                                error={values.companyPasswordErr ? true : false}
                                helperText={values.companyPasswordErr}
                                value={values.companyPassword}
                                onChange={(e) => values.setCompanyPassword(e.target.value)}
                            />
                        </Grid>

                        {/* Confirm password input */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="normal"
                                variant="standard"
                                required
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <VpnKeyRoundedIcon style={{color: 'whitesmoke'}} />
                                      </InputAdornment>
                                    ),
                                  }}
                                label="Confirm password"
                                type="password"
                                error={values.companyConfirmPasswordErr ? true : false}
                                helperText={values.companyConfirmPasswordErr}
                                value={values.companyConfirmPassword}
                                onChange={(e) => values.setCompanyConfirmPassword(e.target.value)}
                            />
                        </Grid> 

                        {/* Website input */}
                        <Grid item xs={12}>
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
                                label="Company website (optional)"
                                type="url"
                                error={values.companyWebsiteErr ? true : false}
                                helperText={values.companyWebsiteErr}
                                value={values.companyWebsite}
                                onChange={(e) => values.setCompanyWebsite(e.target.value)}
                            />
                        </Grid>                        

                    </Grid>
                    <br/>
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

export default CompanyAccountDetailsPresenter
