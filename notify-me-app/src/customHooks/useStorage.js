import { useState, useEffect } from "react";
import { storage } from "../firebase/config";

const useStorageUpload = (file) => {
    const [progress, setProgress] = useState(0);
    const [err, setErr] = useState("");
    const [url, setUrl] = useState(null);

    useEffect(() => {

        if(!file) return;
        
        // TODO: Set structured filename
        // TODO: Return that filename, add it to database for profileUpdate
        const storageRef = storage.ref(file.name);
        // const collectionRef = storage.ref("images");

        storageRef.put(file)
        .on("state_changed", (snapshot) => {
            const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(percentage);
        },
        (err) => {
            setErr(err);
        },
        async () => {
            const url = await storageRef.getDownloadURL();
            setUrl(url);
        }
        );
    }, [file]);

    return {progress, err, url}

}

const storageRemove = (url) => {
    const pictureRef = storage.refFromURL(url);
    pictureRef.delete()
    .then(() => {
        // console.log("Picture deleted successfully!");
    })
}

export { useStorageUpload, storageRemove };