import "./style/style.css";
import React from 'react'
import { withRouter } from "react-router-dom";

import { register } from "../../../helpers/currentUserManager";
import { addUser, addCompany } from "../../../helpers/databaseAdd";

import ConfirmDetailsPresenter from "./ConfirmDetailsPresenter";


function ConfirmDetailsContainer(props) {

    const {parameters, prevStep, values, accountType} = props;

    const keys = Object.keys(parameters);
    const detailValues = Object.values(parameters);

    const registerAccount = async () => {
        let accountData = getAccountData();

        const {email, password, displayName} = accountData;
        let {profileUrl} = accountData;

        // Register account

        // Check if profile picture exists
        if(!profileUrl) {
            profileUrl = null;
        }

        // Create the account
        const user = await register(email, password);

        // Set display name and profile picture URL
        user.updateProfile({
            displayName,
            photoURL: profileUrl
        });

        // Connecting the auth uid and database uid
        accountData.id = user.uid;

        // Insert the account into the database
        const redirectPage = `${accountType}-page`;
        insertAccountToDatabase(accountData, redirectPage);

    }

    const insertAccountToDatabase = (accountData, redirectPage) => {
            if(accountType === "user") {
                // Insert user into database
                const userAddedPromise = addUser(accountData);
                userAddedPromise.then(() => {
                    props.history.push(`/${redirectPage}`);
                })
            }
            else if(accountType === "company") {

                // Insert company into database
                const companyAddedPromise = addCompany(accountData);
                companyAddedPromise.then(() => {
                    props.history.push(`/${redirectPage}`);
                });
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
            branches: values.branches,
            
            phoneNumber: values.phoneNumber.trim() !== "+389" ? values.phoneNumber : "Not Provided",
            website: values.companyWebsite.trim().length ? values.companyWebsite : "Not Provided"
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
