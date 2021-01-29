import React from 'react'
import { TextField, Select, MenuItem, Button, Typography } from "@material-ui/core"

const typesOfServices = [
    "Electricity",
    "Plumbing",
    "ISP"
]

function CompanySearchFormPresenter({companyType, setCompanyType}) {

    return (
        <div className="subscribe-page-search-form">
            
            <Typography variant="h4" style={{alignSelf: "start"}}>
                Search for companies
            </Typography>

            <div className="subscribe-page-search-form-inputs">
                <TextField
                        variant="standard"
                        margin="normal"
                        fullWidth
                        name="company_name"
                        label="Company Name"
                        type="text"
                />
                <Select style={{color: '#f5f5f5'}}
                    margin="none"
                    fullWidth
                    variant="standard"
                    placeholder="Company Type"
                    value={companyType}
                    onChange={(e) => setCompanyType(e.target.value)}
                >
                            {typesOfServices.map(service => {
                                return (
                                    <MenuItem key={service} value={service}>
                                        {service}
                                    </MenuItem>
                                )
                            })}
                        </Select>
            </div>
        
            <div className="subscribe-page-search-form-buttons">
                <Button variant="contained" color="primary" fullWidth>
                    Search
                </Button>

                <Button variant="contained" color="info" fullWidth>
                    Go back
                </Button>
            </div>
        </div>
    )
}

export default CompanySearchFormPresenter
