import React, { useContext } from 'react'
import SubscribePagePresenter from "./SubscribePagePresenter"
import { AuthContext } from "../../../firebase/auth";
import { withRouter } from "react-router-dom"

function SubscribePageContainer(props) {
    // Get all {serviceType} companies here
    const companiesList = [1, 2, 3, 4 ,5, 6, 7, 8];

    const serviceType = props.match.params.type;
    const { currentUser } = useContext(AuthContext);

    if(!currentUser) {
        props.history.push('/notify-me-RST/');
    }

    return (
        currentUser && 
        <SubscribePagePresenter 
            serviceType={serviceType}
            companiesList={companiesList}
        />
    )
}

export default withRouter(SubscribePageContainer)
