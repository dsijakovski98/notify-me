import React, { useContext } from 'react'
import { AuthContext } from "../../../firebase/auth";
import { useCompanyData } from "../../../customHooks/useCompanyData";
import { useCompanyFormData } from './useCompanyFormData';
import { CircularProgress } from "@material-ui/core";
import CompanyEditProfilePresenter from "./CompanyEditProfilePresenter";


function CompanyEditProfileContainer() {
    const { currentUser } = useContext(AuthContext);
    const companyData = useCompanyData(currentUser);

    const formData = useCompanyFormData(companyData);

    const handlePhoneNumberChange = () => {

    }

    const editProfile = () => {
        
    }

    return (
        formData
        ?   <CompanyEditProfilePresenter
                formData={formData}
                editProfile={editProfile}
                handlePhoneNumberChange={handlePhoneNumberChange}
            />
        :   <div style={{display: 'grid', placeItems: 'center', height: '80vh'}}>
                <CircularProgress style={{width: 120, height: 120, justifySelf: 'center'}} />
            </div>
    )
}

export default CompanyEditProfileContainer
