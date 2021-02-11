import React from 'react'
import CompanyServiceDetailsPresenter from "./CompanyServiceDetailsPresenter";

const typesOfServices = [
    "Electricity",
    "Plumbing",
    "ISP"
]

// Dummy data, replace with call to database
// const defaultCities = [
//     "Skopje",
//     "Ohrid",
//     "Kumanovo",
//     "Struga",
//     "Veles",
//     "Bitola",
//     "Gevgelija"
// ]

function CompanyServiceDetailsContainer({values, nextStep, prevStep}) {

    const validateInputs = () => {
        // Clear inputs
        values.setHeadCityErr("");

        let cityError = "";


        // Empty fields
        if(values.headCity.trim() === "") cityError = "Enter headquarters city!";

        const headCityCapitalized = 
            values.headCity.slice(0, 1).toUpperCase() + values.headCity.slice(1);
        values.setHeadCity(headCityCapitalized);

        // Add default city
        if(!values.branches.includes(headCityCapitalized)) {
            handleBranchAdd(headCityCapitalized);
        }
        
        if(cityError.length) {
            values.setHeadCityErr(cityError);
            return false;
        }

        

        return true;
    }



    const continueRegistration = (e) => {
        e.preventDefault();
        if(validateInputs()) {
            nextStep();
        }
    }

    const goBackRegistration = (e) => {
        e.preventDefault();
        prevStep();
    }

    const handleBranchAdd = (city) => {
        const newBranchesList = [...values.branches];
        
        // Capitalize first letter of entry
        const capitalizedCity = 
            city.slice(0, 1).toUpperCase() + city.slice(1);

        // Check if already in array
        if(!values.branches.includes(capitalizedCity) && capitalizedCity.trim() !== "") {
            newBranchesList.push(capitalizedCity);
            values.setBranches(newBranchesList);
        }
    }
    
    const handleBranchRemove = (city, index) => {
        const newBranchesList = [...values.branches];
        newBranchesList.splice(index, 1);
        values.setBranches(newBranchesList);
    }


    return (
        <>
            <CompanyServiceDetailsPresenter 
                values={values}
                continueRegistration={continueRegistration}
                goBackRegistration={goBackRegistration}
                typesOfServices={typesOfServices}
                handleBranchAdd={handleBranchAdd}
                handleBranchRemove={handleBranchRemove}
            />
        </>
    )
}

export default CompanyServiceDetailsContainer
