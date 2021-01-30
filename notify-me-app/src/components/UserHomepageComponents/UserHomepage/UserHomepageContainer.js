import React, { useContext } from 'react'
import UserHomepagePresenter from "./UserHomepagePresenter";
import { AuthContext } from "../../../firebase/auth";
import { withRouter } from "react-router-dom";

function UserHomepageContainer({history}) {
    const { currentUser } = useContext(AuthContext);

    if(currentUser === null) {
        history.push("/notify-me-RST/")
    }

    return (
        <UserHomepagePresenter 
        />
    )
}


export default withRouter(UserHomepageContainer)
