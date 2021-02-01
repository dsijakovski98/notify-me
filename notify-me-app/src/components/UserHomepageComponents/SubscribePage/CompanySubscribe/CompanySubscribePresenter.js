import React from 'react'
import { Button, IconButton, Typography } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';

function CompanySubscribePresenter({
    companyData, userData, subscribe, unsubscribe, profilePic, alreadySubscribed}) {

    const subscribeButton = (
        <Button onClick={() => subscribe()}  
                variant="contained" color="primary" fullWidth>
                    Subscribe
        </Button>
    )

    const unsubscribeButton = (
        <Button onClick={() => unsubscribe()} 
                variant="contained" 
                color="default" style={{color: '#ccc', background: '#555'}} fullWidth>
                    Unsubscribe
        </Button>
    )

    return (
        userData &&
        <div className="subscribe-page-company">
            <Typography variant="body1" style={{color: 'whitesmoke'}} >{companyData.name}</Typography>
            <img
            src={profilePic} alt="something" />
            
            <div className="subscribe-page-company-buttons">
                {
                    alreadySubscribed ? 
                    unsubscribeButton : subscribeButton
                }
                <IconButton>
                    <InfoIcon style={{width: 32, height: 32, color: 'whitesmoke'}} />
                </IconButton>
            </div>


        </div>
    )
}

export default CompanySubscribePresenter
