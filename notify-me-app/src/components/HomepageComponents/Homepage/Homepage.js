import "./style/style.css";
import React, { useContext } from "react";
import Banner from "../Banner/Banner";
import JoinUs from "../JoinUs/JoinUs";
import LoginFormContainer from "../LoginForm/LoginFormContainer";
import { AuthContext } from "../../../firebase/auth";
import { withRouter } from "react-router-dom";
import { IsUserLogin } from "../../../helpers/queryManager";


function Homepage({history}) {
    const { currentUser } = useContext(AuthContext);

    const checkRedirect = async () => {
        // TODO: check account type to redirect
        let redirectPage = "";
        const isUser = await IsUserLogin(currentUser.email);
        
        if(isUser) {
            redirectPage = "user-page";
        }
        else {
            redirectPage = "company-page";
        }

        history.push(`/notify-me-RST/${redirectPage}`);
    }

    if(currentUser) {
        checkRedirect();
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
