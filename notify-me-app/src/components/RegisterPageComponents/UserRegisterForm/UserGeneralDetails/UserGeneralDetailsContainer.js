import React from 'react';
import UserGeneralDetailsPresenter from "./UserGeneralDetailsPresenter";

function UserGeneralDetailsContainer({values, nextStep}) {


    const continueRegistration = (e) => {
        e.preventDefault();
        if(validateInputs()) {
            nextStep();
        }
    }

    const validateInputs = () => {
        // Clear previous errors
        values.setFirstNameErr("");
        values.setLastNameErr("");
        values.setCityErr("");

        let fNameError = "";
        let lNameError = "";
        let cityError = "";

        // Check if date is invalid
        if(isNaN(values.dateOfBirth.getTime()))  return false;

        // Empty fields
        if(values.firstName === "") fNameError = "Enter first name!";
        if(values.lastName === "") lNameError = "Enter last name!";
        if(values.city === "") cityError = "Enter city name!";
        

        if(fNameError.length || lNameError.length || cityError.length) {
            values.setFirstNameErr(fNameError);
            values.setLastNameErr(lNameError);
            values.setCityErr(cityError);
            return false;
        }
        
        // If the code reaches this point, there are no errors
        return true;
    }


    return (
        <>
            <UserGeneralDetailsPresenter 
                values={values}
                continueRegistration={continueRegistration}
            />
        </>
    )
}

export default UserGeneralDetailsContainer;
