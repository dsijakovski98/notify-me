import React from 'react';
import UserProfilePicturePresenter from "./UserProfilePicturePresenter";
import { storageRemove } from "../../../../customHooks/useStorage";

const validImageTypes = ["image/png", "image/jpg", "image/jpeg"];

function UserProfilePictureContainer({values, nextStep, prevStep}) {

  let fileError = false;

  const uploadFile = (e) => {
      values.setFileErr("");
      fileError = false;

      if(values.imageSource) {
        storageRemove(values.imageSource);
      }

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
      prevStep();
    }

    return (
        <>
            <UserProfilePicturePresenter
                values={values}
                uploadFile={uploadFile}
                continueRegistration={continueRegistration}
                goBackRegistration={goBackRegistration}
            />
        </>
    )
}

export default UserProfilePictureContainer
