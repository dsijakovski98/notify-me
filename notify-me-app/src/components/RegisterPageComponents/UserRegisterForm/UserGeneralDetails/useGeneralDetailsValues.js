import { useState } from 'react';
import moment from 'moment'
import { dateFormat } from "../../../../helpers/validators"


// User General Details
const useGeneralDetails = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState(new Date());
    const [gender, setGender] = useState("Other");
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

        gender,
        setGender,

        city,
        setCity,
        cityErr,
        setCityErr
    }


    const generalDetailsParams = {
        "First Name": firstName,
        "Last Name": lastName,
        "Date of Birth":
            dateOfBirth ? 
            moment(dateOfBirth).format(dateFormat)
            : "",
        "Gender": gender,
        "City": city,
    }

    return [generalDetailsValues, generalDetailsParams];
}

export default useGeneralDetails;
