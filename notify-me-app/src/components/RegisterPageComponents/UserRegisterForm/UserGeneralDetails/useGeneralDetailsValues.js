import { useState } from 'react';

// User General Details
const useGeneralDetails = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState(new Date());
    const [city, setCity] = useState("");

    const [firstNameErr, setFirstNameErr] = useState("");
    const [lastNameErr, setLastNameErr] = useState("");
    const [cityErr, setCityErr] = useState("");

    const generalDetailsValues = {
        firstName,
        setFirstName,
        firstNameErr,
        setFirstNameErr,

        lastName,
        setLastName,
        lastNameErr,
        setLastNameErr,

        dateOfBirth,
        setDateOfBirth,

        city,
        setCity,
        cityErr,
        setCityErr
    }

    const generalDetailsParams = {
        "First Name": firstName,
        "Last Name": lastName,
        "Date of Birth": 
            `${dateOfBirth.getDate()}/${dateOfBirth.getMonth()}/${dateOfBirth.getFullYear()}`,
        "City":city,
    }

    return [generalDetailsValues, generalDetailsParams];
}

export default useGeneralDetails;
