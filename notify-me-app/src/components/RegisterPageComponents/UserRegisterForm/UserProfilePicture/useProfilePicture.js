import { useState } from "react";

const useProfilePicture = () => {
    // User Profile Picture Details
    const [file, setFile] = useState(null);
    const [fileErr, setFileErr] = useState("");
    const [imageSource, setImageSource] = useState("");

    const profilePictureDetails = {
        file,
        setFile,
        imageSource,

        fileErr,
        setFileErr,
        setImageSource
    }

    return [profilePictureDetails];
}

export default useProfilePicture;