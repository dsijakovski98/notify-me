import { useState } from 'react';

const useUpdatePostFormData = (post) => {
    const [postType, setPostType] = useState(post.type);

    const [citiesPostApplies, setCitiesPostApplies] = useState(post["cities_affected"]);

    const [postTitle, setPostTitle] = useState(post.title);
    const [postContent, setPostContent] = useState(post.content);

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

export default useUpdatePostFormData;