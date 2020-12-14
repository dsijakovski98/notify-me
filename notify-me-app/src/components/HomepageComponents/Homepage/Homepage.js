import "./style/style.css";
import React from "react";
import Banner from "../Banner/Banner";
import JoinUs from "../JoinUs/JoinUs";
import LoginFormContainer from "../LoginForm/LoginFormContainer";

function Homepage() {
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

export default Homepage;
