import React, { useState } from 'react'
import { Button, IconButton, Typography, Modal } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import CompanyDetailsModalContainer from "./CompanyDetailsModal/CompanyDetailsModalContainer";

function CompanySubscribePresenter({
    companyData, userSubscribtions, subscribe, unsubscribe, profilePic, alreadySubscribed}) {

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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

    const modalBody = (
                        <>
                            <CompanyDetailsModalContainer 
                                company={companyData}
                                handleClose={handleClose}
                            />
                        </>
                    );

    return (
        userSubscribtions &&
        <div className="subscribe-page-company">
            <Typography variant="body1" style={{color: 'whitesmoke'}} >{companyData.name}</Typography>
            <img
            src={profilePic} alt="something" />
            
            <div className="subscribe-page-company-buttons">
                {
                    alreadySubscribed ? 
                    unsubscribeButton : subscribeButton
                }
                <IconButton onClick={() => handleOpen()} >
                    <InfoIcon style={{width: 32, height: 32, color: 'whitesmoke'}} />
                </IconButton>
            </div>
            
            <Modal disableScrollLock={true} open={open} onClose={() => handleClose()}>
                {
                    modalBody
                }
            </Modal>

        </div>
    )
}

export default CompanySubscribePresenter
