import React, { useContext, useState } from 'react'
import UserHomepagePresenter from "./UserHomepagePresenter";
import { AuthContext } from "../../../firebase/auth";
import { withRouter } from "react-router-dom";

function UserHomepageContainer({history}) {
    const { currentUser } = useContext(AuthContext);

    const [postsPage, setPostsPage] = useState("");

    if(currentUser === null) {
        history.push("/notify-me-RST/")
    }


    return (
        <UserHomepagePresenter 
            postsPage={postsPage}
            setPostsPage={setPostsPage}
        />
    )
}


export default withRouter(UserHomepageContainer)
