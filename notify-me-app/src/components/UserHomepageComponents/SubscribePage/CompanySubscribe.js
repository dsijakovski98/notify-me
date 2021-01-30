import React from 'react'
import { Button, IconButton, Typography } from '@material-ui/core'
import InfoIcon from '@material-ui/icons/Info';
import img from "../../../images/default-company-pic.png"

function CompanySubscribe({name}) {
    return (
        <div className="subscribe-page-company">
            <Typography variant="body1" style={{color: 'whitesmoke'}} >{name}</Typography>
            <img
            src={img} alt="something" />
            
            <div className="subscribe-page-company-buttons">
                <Button variant="contained" color="primary" fullWidth>
                    Subscribe
                </Button>
                <IconButton>
                    <InfoIcon style={{width:30, height:30, color: 'whitesmoke'}} />
                </IconButton>
            </div>


        </div>
    )
}

export default CompanySubscribe
