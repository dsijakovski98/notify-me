import React, { useContext } from 'react'
import { AuthContext } from "../../../firebase/auth";
import { useUserData } from "../../../customHooks/useUserData";
import { useUserFormData } from './useUserFormData';
import { CircularProgress } from "@material-ui/core";
import UserEditProfilePresenter from "./UserEditProfilePresenter";

function UserEditProfileContainer() {
    const { currentUser } = useContext(AuthContext);
    const userData = useUserData(currentUser);
    
    const formData = useUserFormData(userData);

    const editProfile = () => {
        
    }

    return (
        formData
        ?   <UserEditProfilePresenter
                formData={formData}
                editProfile={editProfile}
            />
        :   <div style={{display: 'grid', placeItems: 'center', height: '80vh'}}>
                <CircularProgress style={{width: 120, height: 120, justifySelf: 'center'}} />
            </div>
    )
}

export default UserEditProfileContainer
