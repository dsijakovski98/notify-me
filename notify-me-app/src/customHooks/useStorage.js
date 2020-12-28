import { useState, useEffect } from "react";
import { storage } from "../firebase/config";

const useStorage = (file, accountType) => {
    const [progress, setProgress] = useState(null);
    const [err, setErr] = useState("");
    const [url, setUrl] = useState(null);

    useEffect(() => {

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

export default useStorage;