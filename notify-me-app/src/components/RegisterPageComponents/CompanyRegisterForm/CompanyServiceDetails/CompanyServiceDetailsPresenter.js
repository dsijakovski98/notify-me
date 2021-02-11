import React from 'react'
import "../../style/style.css";
import ChipInput from 'material-ui-chip-input';
import InputAdornment from '@material-ui/core/InputAdornment';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Typography, TextField, Button, Avatar, Grid, MenuItem, Select }
 from '@material-ui/core';
 import LocationCityRoundedIcon from '@material-ui/icons/LocationCityRounded';
 import CallRoundedIcon from '@material-ui/icons/CallRounded';

function CompanyServiceDetailsPresenter
({values, continueRegistration, goBackRegistration, typesOfServices,
    handleBranchAdd, handleBranchRemove
}) {
    return (
        <div className="form-container-flex">
            <div className="form-explanation-container">
                <Typography variant="h2">
                    Enter company service details
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
                
                        {/* Headquarters input */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="normal"
                                variant="standard"
                                required
                                fullWidth
                                autoFocus
                                InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <LocationCityRoundedIcon style={{color: 'whitesmoke'}} />
                                      </InputAdornment>
                                    ),
                                  }}
                                label="City Headquarters"
                                type="text"
                                error={values.headCityErr ? true : false}
                                helperText={values.headCityErr}
                                value={values.headCity}
                                onChange={(e) => values.setHeadCity(e.target.value)}
                            />
                        </Grid>   

                        {/* Type of service input */}
                        <Grid item xs={12} sm={6}>
                        <Select style={{color: '#f5f5f5', marginTop: '1.2em'}}
                            margin="normal"
                            variant="standard"
                            fullWidth
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

                        {/* Branches input */}
                        <Grid item xs={12}>
                            <>
                            <ChipInput
                                margin="normal"
                                fullWidth
                                allowDuplicates={false}
                                value={values.branches}
                                placeholder="Branch cities  -  ⤵  to add"
                                onAdd={(city) => handleBranchAdd(city)}
                                onDelete={
                                    (city, index) => handleBranchRemove(city, index)
                                }
                            />
                            </>
                        </Grid>    

                        {/* Telephone input */}
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
                                            <CallRoundedIcon style={{color: 'whitesmoke'}} />
                                        </InputAdornment>
                                        ),
                                    }}
                                    label="Telephone"
                                    type="tel"
                                    // error={values.companyEmailErr ? true : false}
                                    // helperText={values.companyEmailErr}
                                    // value={values.companyEmail}
                                    // onChange={(e) => values.setCompanyEmail(e.target.value)}
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

export default CompanyServiceDetailsPresenter;