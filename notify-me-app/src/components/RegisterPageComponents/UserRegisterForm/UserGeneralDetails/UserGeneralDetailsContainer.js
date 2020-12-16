import React, { useState } from 'react';
import UserGeneralDetailsPresenter from "./UserGeneralDetailsPresenter";

function UserGeneralDetailsContainer({nextStep}) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState(new Date());
    const [city, setCity] = useState("");

    const [firstNameErr, setFirstNameErr] = useState("");
    const [lastNameErr, setLastNameErr] = useState("");
    const [cityErr, setCityErr] = useState("");

    const continueRegistration = (e) => {
        e.preventDefault();
        if(validateInputs()) {
            nextStep();
        }
    }

    const validateInputs = () => {
        // Clear previous errors
        setFirstNameErr("");
        setLastNameErr("");
        setCityErr("");

        let fNameError = "";
        let lNameError = "";
        let cityError = "";

        // Check if date is invalid
        if(isNaN(dateOfBirth.getTime()))  return false;

        // Empty fields
        if(firstName === "") fNameError = "Enter first name!";
        if(lastName === "") lNameError = "Enter last name!";
        if(city === "") cityError = "Enter city name!";
        

        if(fNameError.length || lNameError.length || cityError.length) {
            setFirstNameErr(fNameError);
            setLastNameErr(lNameError);
            setCityErr(cityError);
            return false;
        }
        

        // If the code reaches this point, there are no errors
        return true;
    }

    const values = {
        firstName,
        setFirstName,
        firstNameErr,

        lastName,
        setLastName,
        lastNameErr,

        dateOfBirth,
        setDateOfBirth,

        city,
        setCity,
        cityErr,

        continueRegistration
    }

    return (
        <>
            <UserGeneralDetailsPresenter values={values} />
        </>
    )
}

export default UserGeneralDetailsContainer;
