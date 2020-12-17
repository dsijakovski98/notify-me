import { useState } from "react";

const useCompanyProfilePicture = () => {
    // Company Profile Picture Details
    const [file, setFile] = useState(null);
    const [fileErr, setFileErr] = useState("");

    const profilePictureValues = {
        file,
        setFile,

        fileErr,
        setFileErr
    }

    return [profilePictureValues];
}

export default useCompanyProfilePicture;