import React, { useContext } from 'react';
import CompanyHomepagePresenter from "./CompanyHomepagePresenter";
import { AuthContext } from "../../../firebase/auth";
import { withRouter } from "react-router-dom";


function CompanyHomepageContainer({history}) {
    const { currentUser } = useContext(AuthContext);

    if(currentUser === null) {
        history.push("/notify-me-RST/")
    }

    // TODO: Get company posts here
    const posts = [1, 2, 3, 4 ,5, 6, 7, 8, 9, 10];


    return (
        <CompanyHomepagePresenter
        posts={posts} />
    )
}

export default withRouter(CompanyHomepageContainer)
