import React from 'react'
import "../../style/style.css";
import Select from '@material-ui/core/Select';
import ChipInput from 'material-ui-chip-input'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Typography, TextField, Button, Avatar, Grid, MenuItem, InputLabel }
 from '@material-ui/core';

function CompanyServiceDetailsPresenter
({values, continueRegistration, goBackRegistration, typesOfServices, cities,
    handleBranchAdd, handleBranchRemove
}) {
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
                    <br/>
                    <Grid container spacing={2} alignItems="center" >
                
                        {/* Email input */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="dense"
                                variant="outlined"
                                required
                                fullWidth
                                autoFocus
                                label="City Headquarters"
                                type="email"
                                error={values.headCityErr ? true : false}
                                helperText={values.headCityErr}
                                value={values.headCity}
                                onChange={(e) => values.setHeadCity(e.target.value)}
                            />
                        </Grid>   

                        {/* Password input */}
                        <Grid item xs={12} sm={6}>
                        <InputLabel htmlFor="services-select">Service Type</InputLabel>
                        <Select style={{color: '#f5f5f5', marginBottom: '0.5em'}}
                            margin="dense"
                            fullWidth
                            variant="outlined"
                            label="demo-simple-select-label"
                            id="services-select"
                            value={values.serviceType}
                            onChange={(e) => values.setServiceType(e.target.value)}
                        >
                            {typesOfServices.map(service => {
                                return (
                                    <MenuItem key={service} value={service}>
                                        {service}
                                    </MenuItem>
                                )
                            })}
                        </Select>
                        </Grid>

                        {/* Confirm password input */}
                        <Grid item xs={12}>
                            <ChipInput
                                fullWidth
                                dataSource={cities}
                                defaultValue={values.branches[0]}
                                placeholder="List of branch cities"
                                onRequestAdd={
                                    city => handleBranchAdd(city)
                                }
                                onRequestDelete={
                                    (city, index) => handleBranchRemove(city, index)
                                }
                            >
                                
                            </ChipInput>
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

export default CompanyServiceDetailsPresenter;