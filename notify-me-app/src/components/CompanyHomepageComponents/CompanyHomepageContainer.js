import React, { useContext } from 'react';
import CompanyHomepagePresenter from "./CompanyHomepagePresenter";
import { AuthContext } from "../../firebase/auth";
import { withRouter } from "react-router-dom";


function CompanyHomepageContainer({history}) {
    const { currentUser } = useContext(AuthContext);

    if(currentUser === null) {
        history.push("/notify-me-RST/")
    }


    return (
        <CompanyHomepagePresenter />
    )
}

export default withRouter(CompanyHomepageContainer)
