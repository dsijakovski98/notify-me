import React from 'react'
import AddPostFormPresenter from "./AddPostFormPresenter";
import usePostFormData from "./usePostFormData";

// Dummy data, replace with call to database
const defaultCities = [
    "Skopje",
    "Ohrid",
    "Kumanovo",
    "Struga",
    "Veles",
    "Bitola",
    "Gevgelija"
];

function AddPostFormContainer({handleClose}) {
    // NEW POST DATA HERE
    const [formData] = usePostFormData();

    // Create post and close dialog function here
    const createPost = () => {
        // Create post here

        handleClose();
    }

    // Clear post and close dialog function here
    const canclePost = () => {
        // Clear inputs here

        handleClose();
    }

    const handleBranchAdd = (city) => {
        // Add to formData.citiesPostApplies
        const newList = [...formData.citiesPostApplies];
        
        // Capitalize first letter of entry
        const capitalizedCity = 
            city.slice(0, 1).toUpperCase() + city.slice(1);

        // Check if valid input and not already in array
        if(defaultCities.includes(capitalizedCity) &&
         !formData.citiesPostApplies.includes(capitalizedCity)) {
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

    return (
        <AddPostFormPresenter 
        formData={formData}
        handleBranchAdd={handleBranchAdd}
        handleBranchRemove={handleBranchRemove}
        createPost={createPost}
        canclePost={canclePost} />
    )
}

export default AddPostFormContainer
