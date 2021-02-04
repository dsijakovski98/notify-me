import React, { useContext, useState } from 'react'
import SubscribePagePresenter from "./SubscribePagePresenter";
import { AuthContext } from "../../../firebase/auth";
import { withRouter } from "react-router-dom";
import { useCompaniesList } from "../../../customHooks/useCompaniesList";
import { useUserSubscribtionsData } from "../../../customHooks/useUserSubscribtionsData";

function SubscribePageContainer(props) {
    const { currentUser } = useContext(AuthContext);
    const userSubscribtions = useUserSubscribtionsData(currentUser);

    // Data for subscribe page
    const serviceType = props.match.params.type;
    const [companyName, setCompanyName] = useState("");
    const [companyType, setCompanyType] = useState(serviceType);

    // Get all {serviceType} companies here
    const companiesList = useCompaniesList(companyName, companyType);
    

    const searchFormData = {
        companyType,
        setCompanyType,
        companyName,
        setCompanyName
    };

    return (
        <SubscribePagePresenter 
            serviceType={serviceType}
            companiesList={companiesList}
            searchFormData={searchFormData}
            userSubscribtions={userSubscribtions}
        />
    )
}

export default withRouter(SubscribePageContainer)
