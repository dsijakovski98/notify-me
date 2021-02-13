import React from 'react'
import "../../style/style.css";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Typography, TextField, Button, Avatar, Grid, CircularProgress } from '@material-ui/core';
import AlternateEmailRoundedIcon from '@material-ui/icons/AlternateEmailRounded';
import VpnKeyRoundedIcon from '@material-ui/icons/VpnKeyRounded';


function UserAccountDetailsPresenter({values, continueRegistration, goBackRegistration, progressBar}) {
    return (
        <div className="form-container-flex">
            <div className="form-explanation-container">
                <Typography variant="h2">
                    Enter account details
                </Typography>
            </div>
            
            {
                progressBar && 
                <div>
                    <CircularProgress  style={{width: 60, height: 60, marginRight: '2em'}}/>
                </div>
            }
            
            <div className="form-inputs-container">
                <div className="login-form-inputs">
                    <Avatar style={{backgroundColor: '#3f51b5'}}>
                        <LockOutlinedIcon />
                    </Avatar>
                    
                    <Typography component="h1" variant="h5" >Sign up</Typography>
                    <br/>
                    <br/>
                    <Grid container spacing={2}>
                
                        {/* Email input */}
                        <Grid item xs={12}>
                            <TextField
                                margin="normal"
                                variant="standard"
                                required
                                autoFocus
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <AlternateEmailRoundedIcon style={{color: 'whitesmoke'}} />
                                      </InputAdornment>
                                    ),
                                  }}
                                label="Email"
                                type="email"
                                error={values.emailErr ? true : false}
                                helperText={values.emailErr}
                                value={values.userEmail}
                                onChange={(e) => values.setUserEmail(e.target.value)}
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
                                type="password"
                                label="Password"
                                error={values.passwordErr ? true : false}
                                helperText={values.passwordErr}
                                value={values.userPassword}
                                onChange={(e) => values.setUserPassword(e.target.value)}
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
                                type="password"
                                label="Confirm password"
                                error={values.confirmPasswordErr ? true : false}
                                helperText={values.confirmPasswordErr}
                                value={values.passwordConfirm}
                                onChange={(e) => values.setPasswordConfirm(e.target.value)}
                            />
                        </Grid>            

                    </Grid>
                    <br/>
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

export default UserAccountDetailsPresenter
