import React, { useContext, useState } from 'react'
import SubscribePagePresenter from "./SubscribePagePresenter";
import { AuthContext } from "../../../firebase/auth";
import { withRouter } from "react-router-dom";
import { useCompaniesList } from "../../../customHooks/useCompaniesList";
import { useUserData } from "../../../customHooks/useUserData";

function SubscribePageContainer(props) {
    const { currentUser } = useContext(AuthContext);
    const userData = useUserData(currentUser);

    // Data for subscribe page
    const serviceType = props.match.params.type;
    const [companyType, setCompanyType] = useState(serviceType);
    const [companyName, setCompanyName] = useState("");

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
            userData={userData}
        />
    )
}

export default withRouter(SubscribePageContainer)
