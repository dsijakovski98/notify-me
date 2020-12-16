import React from 'react';
import UserProfilePicturePresenter from "./UserProfilePicturePresenter";

const validImageTypes = ["image/png", "image/jpg", "image/jpeg"];

function UserProfilePictureContainer({values, nextStep, prevStep}) {

    // TODO: Connect to firebase for uploading files

    const uploadFile = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
          values.setFile(selectedFile);
          if (validImageTypes.includes(selectedFile.type)) {
            values.setErr("");
          } else {
            values.setErr("Select a valid file (png or jpg);");
          }
        } else {
          values.setFile(null);
        }
      };

    const continueRegistration = (e) => {
      e.preventDefault();
      nextStep();
    }

    const goBackRegistration = (e) => {
      prevStep();
    }

    return (
        <>
            <UserProfilePicturePresenter
                values={values}
                continueRegistration={continueRegistration}
                goBackRegistration={goBackRegistration}
            />
        </>
    )
}

export default UserProfilePictureContainer
