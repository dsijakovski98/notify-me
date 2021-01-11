import "./style/style.css";
import React from 'react'
import { withRouter } from "react-router-dom";

import { auth } from "../../../firebase/config";
import { addUser, addCompany } from "../../../helpers/databaseAdd";

import ConfirmDetailsPresenter from "./ConfirmDetailsPresenter";


function ConfirmDetailsContainer(props) {

    const {parameters, prevStep, values, accountType} = props;

    const keys = Object.keys(parameters);
    const detailValues = Object.values(parameters);

    const registerAccount = () => {
        let accountData = getAccountData();

        const {email, password, displayName} = accountData;
        let {profileUrl} = accountData;

        // Register account

        // Check if profile picture exists

        if(!profileUrl) {
            profileUrl = null;
        }

        // Create the account
        auth.createUserWithEmailAndPassword(email, password)
        .then((result) => {
            result.user.updateProfile({
                displayName,
                photoURL: profileUrl
            })
    
            // Connecting the auth uid and database uid
            accountData.id = result.user.uid;

            const redirectPage = `${accountType}-page`;
            insertAccountToDatabase(accountData, redirectPage);
        })
        .catch((err) => {
            console.log(err);
        })

    }

    const insertAccountToDatabase = (accountData, redirectPage) => {
            // Check account type
            if(accountType === "user") {
                // Insert user into database
                const userPromise = addUser(accountData);
                userPromise.then(() => {
                    props.history.push(`/notify-me-RST/${redirectPage}`);
                })
            }

            else if(accountType === "company") {
                // Insert company into database
                const companyPromise = addCompany(accountData);
                companyPromise.then(() => {
                    props.history.push(`/notify-me-RST/${redirectPage}`);
                })
            }
    }

    const getAccountData = () => {
        let accountData = null;

        if(accountType === "user") {
            accountData = extractUserData();
        }
        else if(accountType === "company") {
            accountData = extractCompanyData();
        }

        return accountData;
    }

    const extractUserData = () => {
        return {
            id: null,
            email: values.userEmail,
            password: values.userPassword,
            displayName: values.firstName,
            profileUrl: values.imageSource,

            firstName: values.firstName,
            lastName: values.lastName,
            gender: values.gender,
            dateOfBirth: values.dateOfBirth
        }
    }

    const extractCompanyData = () => {
        return {
            id: null,
            email: values.companyEmail,
            password: values.companyPassword,
            displayName: values.companyName,
            profileUrl: values.imageSource,

            companyName: values.companyName,
            dateOfCreation: values.companyStartDate,
            ceoFirstName: values.companyFounderFirstName,
            ceoLastName: values.companyFounderLastName,
            cityHeadquarters: values.headCity,
            serviceType: values.serviceType,
            branches: values.branches
        }
    }


    return (
        <ConfirmDetailsPresenter 
            keys={keys}
            detailValues={detailValues}
            prevStep={prevStep}
            registerAccount={registerAccount}
        />
    )
}

export default withRouter(ConfirmDetailsContainer)
