import React from 'react'
import CompanyServiceDetailsPresenter from "./CompanyServiceDetailsPresenter";

const typesOfServices = [
    "Electricity",
    "Plumbing",
    "ISP"
]

// Dummy data, replace with call to database
const cities = [
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
        return false;
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
                cities={cities}
                handleBranchAdd={handleBranchAdd}
                handleBranchRemove={handleBranchRemove}
            />
        </>
    )
}

export default CompanyServiceDetailsContainer
