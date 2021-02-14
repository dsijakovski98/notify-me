import { useState, useEffect } from "react";
import { USERS_TABLE_COLUMNS } from "../../../firebase/tables"

const useUserFormData = (userData) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState(new Date());
    const [gender, setGender] = useState("");
    const [profileUrl, setProfileUrl] = useState("");

    const [file, setFile] = useState(null);

    const [firstNameErr, setFirstNameErr] = useState("");
    const [lastNameErr, setLastNameErr] = useState("");
    const [profileUrlErr, setProfileUrlErr] = useState("");

    useEffect(() => {
    if(!userData) return;

    setFirstName(userData[USERS_TABLE_COLUMNS.FIRST_NAME]);
    setLastName(userData[USERS_TABLE_COLUMNS.LAST_NAME]);
    setDateOfBirth(userData[USERS_TABLE_COLUMNS.DATE_OF_BIRTH].toDate());
    setGender(userData[USERS_TABLE_COLUMNS.GENDER]);
    setProfileUrl(userData[USERS_TABLE_COLUMNS.PROFILE_URL]);

    }, [userData]);

    return userData 
                ?   {
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

                        profileUrl,
                        setProfileUrl,
                        profileUrlErr,
                        setProfileUrlErr,

                        file,
                        setFile
                    } 
                :   null;
}

export { useUserFormData };