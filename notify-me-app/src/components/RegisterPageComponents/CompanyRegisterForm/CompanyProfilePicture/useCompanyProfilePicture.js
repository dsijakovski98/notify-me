import { useState } from "react";

const useCompanyProfilePicture = () => {
    // Company Profile Picture Details
    const [file, setFile] = useState(null);
    const [fileErr, setFileErr] = useState("");
    const [imageSource, setImageSource] = useState("");

    const profilePictureValues = {
        file,
        setFile,
        imageSource,

        fileErr,
        setFileErr,
        setImageSource
    }

    return [profilePictureValues];
}

export default useCompanyProfilePicture;