import React, { useEffect } from 'react'
import "../style/upload_style/style.css";
import useStorage from '../../../customHooks/useStorage';
import { motion } from "framer-motion";

function ProgressBar({file, setFile, accountType, setImageSource}) {
    const {progress, url, err} = useStorage(file, accountType);

    useEffect(() => {
        if(url) {
            setImageSource(url);
            setFile(null);
        }
        if(err) {
            console.log(err);
        }
    }, [url, err, setFile, setImageSource])

    return (
        <div className="progress-wrapper">
            <motion.div className="progress-bar"
            initial={{ width: 0 }}
            animate={{ width: progress + '%' }}
            >
            </motion.div>
        </div>
    )
}

export default ProgressBar;
