import { useState, useEffect } from "react";
import { storage } from "../firebase/config";

const useStorageUpload = (file, accountType) => {
    const [progress, setProgress] = useState(0);
    const [err, setErr] = useState("");
    const [url, setUrl] = useState(null);

    useEffect(() => {

        if(!file) return;
        
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
            // const createdAt = timestamp();
            // await collectionRef.add({
            //     url,
            //     created_at: createdAt,
            //     type: accountType
            // });
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