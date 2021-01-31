import React from 'react';
import { Button, IconButton, Typography } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import img from "../../../images/default-company-pic.png";
import { subscribeToCompany } from "../../../helpers/databaseAdd";
import { unsubscribeCompany } from "../../../helpers/databaseRemove";

function CompanySubscribe({companyData, profilePicture, userData}) {

    const profilePic = profilePicture ? profilePicture : img;

    const subscribe = () => {
        const promise = subscribeToCompany(userData, companyData);
        promise.then(() => {
            // Successfull subscribtion
        })
    }

    const unsubscribe = () => {
        const promise = unsubscribeCompany(userData, companyData);
        promise.then(() => {
            // Successfull unsubscribtion
        })
    }

    const alreadySubscribed = userData ? 
    userData.subscribtions.some((item) => item.id === companyData["company_id"]): null;

    const subscribeButton = (
        <Button onClick={() => subscribe()}  
                variant="contained" color="primary" fullWidth>
                    Subscribe
        </Button>
    )

    const unsubscribeButton = (
        <Button onClick={() => unsubscribe()} 
                variant="contained" 
                color="action" style={{color: '#ccc', background: '#555'}} fullWidth>
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
                    <InfoIcon style={{width:30, height:30, color: 'whitesmoke'}} />
                </IconButton>
            </div>


        </div>
    )
}

export default CompanySubscribe
