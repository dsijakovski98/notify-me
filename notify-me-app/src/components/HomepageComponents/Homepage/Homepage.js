import "./style/style.css";
import React, { useContext } from "react";
import Banner from "../Banner/Banner";
import JoinUs from "../JoinUs/JoinUs";
import LoginFormContainer from "../LoginForm/LoginFormContainer";
import { AuthContext } from "../../../firebase/auth";
import { withRouter } from "react-router-dom";

function Homepage({history}) {
    const { currentUser } = useContext(AuthContext);

    if(currentUser) {
        // TODO: check account type to redirect
        history.push("/notify-me-RST/user-page");
    }

    return (
        <div className="homepage-wrapper">
            <div className="homepage-container-grid" >
                <div className="homepage-banner-col" >
                    <Banner />
                    <JoinUs />
                </div>
                <div className="homepage-login-col" > 
                    <LoginFormContainer />
                </div>
            </div>
        </div>
    )
}

export default withRouter(Homepage);
