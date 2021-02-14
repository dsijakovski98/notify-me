import React, { useContext, useState } from 'react'
import { withRouter } from "react-router-dom";
import { AuthContext } from "../../../firebase/auth";
import { useCompanyData } from "../../../customHooks/useCompanyData";
import { useCompanyFormData } from './useCompanyFormData';
import { validateCompanyUpdate } from "./validateCompanyUpdate";
import { storageRemove } from "../../../customHooks/useStorage";
import { updateCompany } from "../../../helpers/databaseUpdate";
import { auth } from "../../../firebase/config"
import { CircularProgress } from "@material-ui/core";
import CompanyEditProfilePresenter from "./CompanyEditProfilePresenter";

const validImageTypes = ["image/png", "image/jpg", "image/jpeg"];

function CompanyEditProfileContainer(props) {
    const { currentUser } = useContext(AuthContext);
    const companyData = useCompanyData(currentUser);
    const formData = useCompanyFormData(companyData);

    const [progressBar, setProgressBar] = useState(false);

    const goBack = () => {
        if(formData.profileUrl)
            storageRemove(formData.profileUrl)
        props.history.goBack();
    }

    const handlePhoneNumberChange = (number) => {
        if(number.slice(0, 4) === "+389")
            formData.setPhoneNumber(number);
    }

    const handleBranchAdd = (city) => {
        const newBranchesList = [...formData.branches];
        
        // Capitalize first letter of entry
        const capitalizedCity = 
            city.slice(0, 1).toUpperCase() + city.slice(1);

        // Check if already in array
        if(!formData.branches.includes(capitalizedCity) && capitalizedCity.trim() !== "") {
            newBranchesList.push(capitalizedCity);
            formData.setBranches(newBranchesList);
        }
    }

    const handleBranchRemove = (city, index) => {
        const newBranchesList = [...formData.branches];
        newBranchesList.splice(index, 1);
        formData.setBranches(newBranchesList);
    }

    const editProfile = () => {
        setProgressBar(true);
        if(validateCompanyUpdate(formData, handleBranchAdd)) {
            const updateCompanyPromise = updateCompany(formData, currentUser.uid);
            updateCompanyPromise.then(() => {
                currentUser.updateProfile({
                    displayName: formData.companyName,
                    photoURL: formData.profileUrl
                })
                .then(() => {
                    auth.updateCurrentUser(currentUser)
                    .then(() => {
                        setProgressBar(false);
                        props.history.push("/notify-me-RST/company-page");
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
        ?   <CompanyEditProfilePresenter
                formData={formData}
                editProfile={editProfile}
                progressBar={progressBar}
                setProgressBar={setProgressBar}
                uploadPicture={uploadPicture}
                handleBranchAdd={handleBranchAdd}
                handleBranchRemove={handleBranchRemove}
                handlePhoneNumberChange={handlePhoneNumberChange}
                goBack={goBack}
            />
        :   <div style={{display: 'grid', placeItems: 'center', height: '80vh'}}>
                <CircularProgress style={{width: 120, height: 120, justifySelf: 'center'}} />
            </div>
    )
}

export default withRouter(CompanyEditProfileContainer)
