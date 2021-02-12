import React from 'react'
import CompanyServiceDetailsPresenter from "./CompanyServiceDetailsPresenter";
import { PhoneNumberUtil } from "google-libphonenumber"; 

const typesOfServices = [
    "Electricity",
    "Plumbing",
    "ISP"
];

const phoneUtil = PhoneNumberUtil.getInstance();

function CompanyServiceDetailsContainer({values, nextStep, prevStep}) {

    const validateInputs = () => {
        // Clear inputs
        values.setHeadCityErr("");
        values.setPhoneNumberErr("");

        let cityError = "";
        let numberError = "";

        // Empty fields
        if(values.headCity.trim() === "") cityError = "Enter headquarters city!";
        // if(values.phoneNumber.trim() === "+389") numberError = "Enter a phone number!";

        // City validation
        const headCityCapitalized = 
            values.headCity.slice(0, 1).toUpperCase() + values.headCity.slice(1);
        values.setHeadCity(headCityCapitalized);

        // Add default city
        if(!values.branches.includes(headCityCapitalized)) {
            handleBranchAdd(headCityCapitalized);
        }


        // Phone number validation
        if(values.phoneNumber.trim() !== "+389") {
            // If a number is entered
            const number = phoneUtil.parse(values.phoneNumber, 'MK');
                if(!phoneUtil.isValidNumberForRegion(number, 'MK')) {
                    numberError = "Invalid number entered for MK region!";
                }
        }
        
        if(cityError.length || numberError.length) {
            values.setHeadCityErr(cityError);
            values.setPhoneNumberErr(numberError);
            return false;
        }



        return true;
    }

    const handlePhoneNumberChange = (number) => {
        if(number.slice(0, 4) === "+389")
            values.setPhoneNumber(number);
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
                handlePhoneNumberChange={handlePhoneNumberChange}
            />
        </>
    )
}

export default CompanyServiceDetailsContainer
