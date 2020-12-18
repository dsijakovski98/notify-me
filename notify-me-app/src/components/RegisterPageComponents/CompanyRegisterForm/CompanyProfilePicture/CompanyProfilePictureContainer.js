import React from 'react';
import CompanyProfilePicturePresenter from "./CompanyProfilePicturePresenter";

const validImageTypes = ["image/png", "image/jpg", "image/jpeg"];

function CompanyProfilePictureContainer({values, nextStep, prevStep}) {

    let fileError = false;

    const uploadFile = (e) => {
        values.setFileErr("");

        const selectedFile = e.target.files[0];

        if (selectedFile) {
            if (validImageTypes.includes(selectedFile.type)) {
                values.setFile(selectedFile);
                values.setFileErr("");
                fileError = false;
          }
          else {
                values.setFileErr("Select a valid file (png, jpg or jpeg)");
                fileError = true;
            }
        }

        else {
          values.setFile(null);
          fileError = true;
        }
      };

    const continueRegistration = (e) => {
        e.preventDefault();
        if(!fileError) {
            nextStep();
        }
    }

    const goBackRegistration = (e) => {
        e.preventDefault();
        prevStep();
    }

    return (
        <>
            <CompanyProfilePicturePresenter
                values={values}
                continueRegistration={continueRegistration}
                goBackRegistration={goBackRegistration}
                uploadFile={uploadFile}
            />  
        </>
    )
}

export default CompanyProfilePictureContainer
