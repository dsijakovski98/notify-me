import React from 'react'
import CompanyServiceDetailsPresenter from "./CompanyServiceDetailsPresenter";

const typesOfServices = [
    "Electricity",
    "Plumbing",
    "ISP"
]

// Dummy data, replace with call to database
const defaultCities = [
    "Skopje",
    "Ohrid",
    "Kumanovo",
    "Struga",
    "Veles",
    "Bitola",
    "Gevgelija"
]

function CompanyServiceDetailsContainer({values, nextStep, prevStep}) {

    const validateInputs = () => {
        // Clear inputs
        values.setHeadCityErr("");

        let cityError = "";

        // Add default city
        if(!values.branches.includes(values.headCity) && values.headCity.length > 0 ) {
            handleBranchAdd(values.headCity);
        }

        // Empty fields
        if(values.headCity === "") cityError = "Enter headquarters city!";
        
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
        newBranchesList.push(city);
        values.setBranches(newBranchesList);
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
                defaultCities={defaultCities}
                handleBranchAdd={handleBranchAdd}
                handleBranchRemove={handleBranchRemove}
            />
        </>
    )
}

export default CompanyServiceDetailsContainer
