import React, { useContext } from 'react';
import CompanyHomepagePresenter from "./CompanyHomepagePresenter";
import { AuthContext } from "../../../firebase/auth";
import { withRouter } from "react-router-dom";
import { CircularProgress } from '@material-ui/core';
import { useCompanyData } from "../../../customHooks/useCompanyData";
import { useCompanyPostsList } from "../../../customHooks/useCompanyPostsList";


function CompanyHomepageContainer({history}) {
    const { currentUser } = useContext(AuthContext);

    if(currentUser === null) {
        history.push("/")
    }

    // TODO: Get company posts here
    const companyPosts = useCompanyPostsList(currentUser);

    // TODO: Get company data (BRANCHES) here
    const currentCompanyData = useCompanyData(currentUser);

    return (
        currentCompanyData 
        ?
            <CompanyHomepagePresenter
            companyPosts={companyPosts}
            currentCompanyData={currentCompanyData} />
        :
            <div style={{display: 'grid', placeItems: 'center', height: '80vh'}}>
                <CircularProgress style={{width: 120, height: 120, justifySelf: 'center'}} />
            </div>
    )
}

export default withRouter(CompanyHomepageContainer)
