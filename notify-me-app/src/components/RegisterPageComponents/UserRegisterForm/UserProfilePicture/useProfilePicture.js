import { useState } from "react";

const useProfilePicture = () => {
    // User Profile Picture Details
    const [file, setFile] = useState(null);
    const [fileErr, setFileErr] = useState("");

    const profilePictureDetails = {
        file,
        setFile,

        fileErr,
        setFileErr
    }

    return [profilePictureDetails];
}

export default useProfilePicture;