import React, { useState } from 'react';
import { updatePost } from "../../../../helpers/databaseUpdate";
import CompanyPostEditPresenter from "./CompanyPostEditPresenter";
import useUpdatePostFormData from "./useUpdatePostFormData";

function CompanyPostEditContainer({post, handleClose, companyBranches}) {

    const [formData] = useUpdatePostFormData(post);

    const [progressBar, setProgressBar] = useState(false);

    const extractPostData = () => {
        const postData = {
            type: formData.postType,
            citiesAffected: formData.citiesPostApplies,
            title: formData.postTitle,
            content: formData.postContent,
            id: post["post_id"]
        };

        return postData;
    }


    const updatePostFunc = () => {
        if(validateUpdatePost()) {
            const post = extractPostData();
            setProgressBar(true);
            const updatePromise = updatePost(post);
            updatePromise.then(() => {
                setProgressBar(false);
                handleClose();
            })
        }
    }

    const cancelUpdatePost = () => {
        // Set default data
        formData.setPostType(post.type);
        formData.setCitiesPostApplies(post["cities_affected"]);
        formData.setPostTitle(post.title);
        formData.setPostContent(post.content);

        // Clear errors here
        formData.setPostTitleErr("");
        formData.setPostContentErr("");
        formData.setCitiesPostAppliesErr("");

        handleClose();
    }

    const handleBranchAdd = (city) => {

        // Add to formData.citiesPostApplies
        const newList = [...formData.citiesPostApplies];
        
        // Capitalize first letter of entry
        const capitalizedCity = 
            city.slice(0, 1).toUpperCase() + city.slice(1);

        // Check if city is in branches of company
        if(!companyBranches.includes(capitalizedCity)) {
            formData.setCitiesPostAppliesErr(
                `City must be in company's branches! (ex. ${companyBranches[companyBranches.length - 1]})`);
            return;
        }

        // Check if already in array
        if(!formData.citiesPostApplies.includes(capitalizedCity)) {
            newList.push(capitalizedCity);
            formData.setCitiesPostApplies(newList);
        }
    }

    const handleBranchRemove = (city, index) => {
        // Remove from formData.citiesPostApplies
        const newList = [...formData.citiesPostApplies];
        newList.splice(index, 1);
        formData.setCitiesPostApplies(newList);
    }

    const validateUpdatePost = () => {
        // Clear previous errors
        formData.setCitiesPostAppliesErr("");
        formData.setPostTitleErr("");
        formData.setPostContentErr("");

        let citiesAppliesErr = "";
        let titleErr = "";
        let contentErr = "";

        // Empty fields
        if(formData.citiesPostApplies.length === 0)
            citiesAppliesErr = 
            `Must provide at least one city! (ex. ${companyBranches[companyBranches.length - 1]})`;
        if(formData.postTitle.trim() === "")
            titleErr = "Enter the post title!";
        if(formData.postContent.trim() === "")
            contentErr = "Enter the post content!";

        if(citiesAppliesErr.length || titleErr.length || contentErr) {
            formData.setCitiesPostAppliesErr(citiesAppliesErr);
            formData.setPostTitleErr(titleErr)
            formData.setPostContentErr(contentErr);
            return false;
        }

        return true;
    }

    return (
        <CompanyPostEditPresenter 
            formData={formData}
            updatePost={updatePostFunc}
            cancelUpdatePost={cancelUpdatePost}
            handleBranchAdd={handleBranchAdd}
            handleBranchRemove={handleBranchRemove}
            progressBar={progressBar}
        />
    )
}

export default CompanyPostEditContainer
