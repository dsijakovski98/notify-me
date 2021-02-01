import React from 'react';
import { subscribeToCompany } from "../../../../helpers/databaseAdd";
import { unsubscribeCompany } from "../../../../helpers/databaseRemove";
import CompanySubscribePresenter from "./CompanySubscribePresenter";
import img from "../../../../images/default-company-pic.png";

function CompanySubscribeContainer({companyData, userData}) {
    
    const profilePic = companyData["profile_url"].length
    ?   companyData["profile_url"] 
    :   img;

    const alreadySubscribed = userData
    ?   userData.subscribtions.some((item) => item.id === companyData["company_id"])
    :   null;

    const subscribe = () => {
    const promise = subscribeToCompany(userData, companyData);
    promise.then(() => {
    // Successfull subscribtion
    })
    }

    const unsubscribe = () => {
    const promise = unsubscribeCompany(userData, companyData);
    promise.then(() => {
    // Successfull unsubscribtion
    })
    }

    return (
        <CompanySubscribePresenter 
        companyData={companyData}
        userData={userData}
        subscribe={subscribe}
        unsubscribe={unsubscribe}
        profilePic={profilePic}
        alreadySubscribed={alreadySubscribed} />
    )
}

export default CompanySubscribeContainer
