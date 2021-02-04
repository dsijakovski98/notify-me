import React from 'react'
import AddPostFormPresenter from "./AddPostFormPresenter";

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

function AddPostFormContainer({currentCompanyData, formData, createPost, cancelPost}) {
    // console.log(currentCompanyData);

    const handleBranchAdd = (city) => {

        // Add to formData.citiesPostApplies
        const newList = [...formData.citiesPostApplies];
        
        // Capitalize first letter of entry
        const capitalizedCity = 
            city.slice(0, 1).toUpperCase() + city.slice(1);

        // Check if city is in branches of company
        if(!currentCompanyData.branches.includes(capitalizedCity)) {
            formData.setCitiesPostAppliesErr("City must be in company's branches!");
            return;
        }

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
        cancelPost={cancelPost} />
    )
}

export default AddPostFormContainer
