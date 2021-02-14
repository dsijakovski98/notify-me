import React, { useContext, useState } from 'react'
import { withRouter } from "react-router-dom";
import { AuthContext } from "../../../firebase/auth";
import { useUserData } from "../../../customHooks/useUserData";
import { useUserFormData } from './useUserFormData';
import { validateUserUpdate } from "./validateUserUpdate";
import { storageRemove } from "../../../customHooks/useStorage";
import { updateUser } from "../../../helpers/databaseUpdate";
import { auth } from "../../../firebase/config"
import { CircularProgress } from "@material-ui/core";
import UserEditProfilePresenter from "./UserEditProfilePresenter";

const validImageTypes = ["image/png", "image/jpg", "image/jpeg"];

function UserEditProfileContainer(props) {
    const { currentUser } = useContext(AuthContext);
    const userData = useUserData(currentUser);
    const formData = useUserFormData(userData);

    const [progressBar, setProgressBar] = useState(false);

    const goBack = () => {
        // if(formData.profileUrl)
        //     storageRemove(formData.profileUrl)
        props.history.goBack();
    }

    const editProfile = () => {

        setProgressBar(true);
        if(validateUserUpdate(formData)) {
            const updateUserPromise = updateUser(formData, currentUser.uid);
            updateUserPromise.then(() => {
                currentUser.updateProfile({
                    displayName: formData.firstName,
                    photoURL: formData.profileUrl
                })
                .then(() => {
                    auth.updateCurrentUser(currentUser)
                    .then(() => {
                        setProgressBar(false);
                        props.history.push("/notify-me-RST/user-page");
                    });
                });
            });
        }
        else setProgressBar(false);
    }

    const uploadPicture = (e) => {
        setProgressBar(true);
        if(formData.profileUrl)
            storageRemove(formData.profileUrl)

        const selectedFile = e.target.files[0];
        
        if (selectedFile) {
            if (validImageTypes.includes(selectedFile.type)) {
                formData.setFile(selectedFile);
                formData.setProfileUrlErr("");
          }
          else formData.setProfileUrlErr("Select a valid file (png, jpg or jpeg)");
        }

        else {
            formData.setFile(null);
        }
    }

    return (
        formData
        ?   <UserEditProfilePresenter
                formData={formData}
                editProfile={editProfile}
                progressBar={progressBar}
                uploadPicture={uploadPicture}
                setProgressBar={setProgressBar}
                goBack={goBack}
            />
        :   <div style={{display: 'grid', placeItems: 'center', height: '80vh'}}>
                <CircularProgress style={{width: 120, height: 120, justifySelf: 'center'}} />
            </div>
    )
}

export default withRouter(UserEditProfileContainer)
