import React from 'react'
import "../../style/style.css";
import Select from '@material-ui/core/Select';
import ChipInput from 'material-ui-chip-input';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Typography, TextField, Button, Avatar, Grid, MenuItem, InputLabel }
 from '@material-ui/core';

function CompanyServiceDetailsPresenter
({values, continueRegistration, goBackRegistration, typesOfServices, defaultCities,
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
                                type="text"
                                error={values.headCityErr ? true : false}
                                helperText={values.headCityErr}
                                value={values.headCity}
                                onChange={(e) => values.setHeadCity(e.target.value)}
                            />
                        </Grid>   

                        {/* Password input */}
                        <Grid item xs={12} sm={6}>
                        <Select style={{color: '#f5f5f5'}}
                            margin="dense"
                            fullWidth
                            variant="standard"
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
                            <>
                            <ChipInput
                                fullWidth
                                allowDuplicates={false}
                                dataSource={defaultCities}
                                value={values.branches}
                                placeholder="Branch cities  -  ⤵  to add"
                                onAdd={(city) => handleBranchAdd(city)}
                                onDelete={
                                    (city, index) => handleBranchRemove(city, index)
                                }
                            />
                            </>
                        </Grid>            

                    </Grid>
                    <br/>
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