import React from 'react';
import { subscribeToCompany } from "../../../../helpers/databaseAdd";
import { unsubscribeFromCompany } from "../../../../helpers/databaseRemove";
import CompanySubscribePresenter from "./CompanySubscribePresenter";
import img from "../../../../images/default-company-pic.png";

function CompanySubscribeContainer({companyData, userSubscribtions}) {
    
    const profilePic = companyData["profile_url"].length
    ?   companyData["profile_url"] 
    :   img;

    // Check if user is subscribed to company
    const alreadySubscribed = userSubscribtions
    ?   userSubscribtions.subscribtions.some((item) => item.id === companyData["company_id"])
    :   null;

    const subscribe = () => {
    const promise = subscribeToCompany(userSubscribtions, companyData);
    promise.then(() => {
    // Successfull subscribtion
    })
    }

    const unsubscribe = () => {
    const promise = unsubscribeFromCompany(userSubscribtions, companyData);
    promise.then(() => {
    // Successfull unsubscribtion
    })
    }

    return (
        <CompanySubscribePresenter 
        companyData={companyData}
        userSubscribtions={userSubscribtions}
        subscribe={subscribe}
        unsubscribe={unsubscribe}
        profilePic={profilePic}
        alreadySubscribed={alreadySubscribed} />
    )
}

export default CompanySubscribeContainer
