import React, { useState } from 'react'
import { Fab } from "@material-ui/core";
import CreateRoundedIcon from "@material-ui/icons/CreateRounded"
import Modal from '@material-ui/core/Modal';
import AddPostFormContainer from './AddPostForm/AddPostFormContainer';
import usePostFormData from "./usePostFormData";
import { addPost } from "../../../helpers/databaseAdd";
import { v4 as uuidv4 } from 'uuid';
import { COMPANY_TABLE_COLUMNS } from "../../../firebase/tables"
  

function AddPost({currentCompanyData}) {

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [formData] = usePostFormData();

    // Create post and close dialog function here
    const createPost = () => {

        if(validateCreatePost()) {
            // Create post call to database
            const postId = uuidv4();

            const post = {
                id: postId,
                creatorId: currentCompanyData[COMPANY_TABLE_COLUMNS.COMPANY_ID],
                creatorName: currentCompanyData[COMPANY_TABLE_COLUMNS.COMPANY_NAME],
                creatorProfileUrl: currentCompanyData[COMPANY_TABLE_COLUMNS.PROFILE_URL],
                type: formData.postType,
                title: formData.postTitle,
                content: formData.postContent,
                citiesPostApplies: formData.citiesPostApplies
            };

            const addPostPromise = addPost(post);
            addPostPromise.then(() => {
                // Clear inputs here
                formData.setPostType("Warning");
                formData.setCitiesPostApplies([]);
                formData.setPostTitle("");
                formData.setPostContent("");
                handleClose();
            });
        }

    }

    // Clear post and close dialog function here
    const cancelPost = () => {
        // Clear inputs here
        formData.setPostType("Warning");
        formData.setCitiesPostApplies([]);
        formData.setPostTitle("");
        formData.setPostContent("");

        // Clear errors
        formData.setPostTitleErr("");
        formData.setPostContentErr("");
        formData.setCitiesPostAppliesErr("");

        handleClose();
    }

    const validateCreatePost = () => {
        // Clear previous errors
        formData.setCitiesPostAppliesErr("");
        formData.setPostTitleErr("");
        formData.setPostContentErr("");

        let citiesAppliesErr = "";
        let titleErr = "";
        let contentErr = "";

        // Empty fields
        if(formData.citiesPostApplies.length === 0)
            citiesAppliesErr = 
            `Must provide at least one city! (ex. ${currentCompanyData.branches[0]})`;
        if(formData.postTitle.length === 0)
            titleErr = "Enter the post title!";
        if(formData.postContent.length === 0)
            contentErr = "Enter the post content!";

        if(citiesAppliesErr.length || titleErr.length) {
            formData.setCitiesPostAppliesErr(citiesAppliesErr);
            formData.setPostTitleErr(titleErr)
            formData.setPostContentErr(contentErr);
            return false;
        }

        return true;
    }


    const modalBody = (
                        <>
                            <AddPostFormContainer
                                currentCompanyData={currentCompanyData}
                                formData={formData}
                                createPost={createPost}
                                cancelPost={cancelPost} />
                        </>
                    );

    return (
        <>
        <div className="company-homepage-create-post-fab">
            <Fab onClick={() => handleOpen()} color="primary" size="large" style={{padding: '2.8em'}}>
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
