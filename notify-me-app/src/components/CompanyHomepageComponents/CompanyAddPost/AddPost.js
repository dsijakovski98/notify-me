import React, { useState } from 'react'
import { Fab } from "@material-ui/core";
import CreateRoundedIcon from "@material-ui/icons/CreateRounded"
import Modal from '@material-ui/core/Modal';
import AddPostFormContainer from './AddPostForm/AddPostFormContainer';
  

function AddPost() {

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const modalBody = (
                        <>
                            <AddPostFormContainer handleClose={handleClose} />
                        </>
                    );

    return (
        <>
        <div className="company-homepage-create-post-fab">
            <Fab onClick={() => handleOpen()} 
            color="primary" size="large" style={{padding: '2.8em'}}>
                <CreateRoundedIcon style={{width: 35, height: 35}} />
            </Fab>
        </div>

        <Modal disableScrollLock={true} open={open} onClose={() => handleClose()}>
            {
                modalBody
            }
        </Modal>
        </>
    )
}

export default AddPost
