import { useState } from 'react';

const usePostFormData = () => {
    const [postType, setPostType] = useState("Warning");

    const [citiesPostApplies, setCitiesPostApplies] = useState([]);

    const [postTitle, setPostTitle] = useState("");
    const [postContent, setPostContent] = useState("");

    const [citiesPostAppliesErr, setCitiesPostAppliesErr] = useState("");
    const [postTitleErr, setPostTitleErr] = useState("");
    const [postContentErr, setPostContentErr] = useState("");

    const postFormData = {
        postType,
        setPostType,

        citiesPostApplies,
        setCitiesPostApplies,
        citiesPostAppliesErr,
        setCitiesPostAppliesErr,

        postTitle,
        setPostTitle,
        postTitleErr,
        setPostTitleErr,
        
        postContent,
        setPostContent,
        postContentErr,
        setPostContentErr
    };

    return [postFormData];
}

export default usePostFormData;