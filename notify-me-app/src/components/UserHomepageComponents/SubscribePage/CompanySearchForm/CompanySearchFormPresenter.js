import React from 'react'
import { Link } from "react-router-dom"
import { TextField, Select, MenuItem, Button, Typography } from "@material-ui/core"

const typesOfServices = [
    "Electricity",
    "Plumbing",
    "ISP"
]

function CompanySearchFormPresenter({companyType, helperFormData, updateData}) {
    const {
        name,
        setName,
        type,
        setType
    } = helperFormData;

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
                        inputProps={{
                            autoCapitalize: "on"
                        }}
                        name="company_name"
                        label="Company Name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                />
                <Select style={{color: '#f5f5f5'}}
                    margin="none"
                    fullWidth
                    variant="standard"
                    placeholder="Company Type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
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
                <Button onClick={() => updateData()} 
                variant="contained" color="primary" fullWidth>
                    Search
                </Button>
                <Link to={`/notify-me-RST/user-page/posts/${companyType}`}>
                    <Button variant="contained" color="default" fullWidth>
                        Go back
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default CompanySearchFormPresenter
