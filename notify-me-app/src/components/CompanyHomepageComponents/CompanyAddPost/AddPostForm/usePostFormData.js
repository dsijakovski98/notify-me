import { useState } from 'react';

const usePostFormData = () => {
    const [postType, setPostType] = useState("Warning");
    const [citiesPostApplies, setCitiesPostApplies] = useState([]);

    const [postTitle, setPostTitle] = useState("");
    const [postContent, setPostContent] = useState("");

    const postFormData = {
        postType,
        setPostType,
        citiesPostApplies,
        setCitiesPostApplies,
        postTitle,
        setPostTitle,
        postContent,
        setPostContent
    };

    return [postFormData];
}

export default usePostFormData;