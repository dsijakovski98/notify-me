import "./style/style.css";
import React from "react";
import Banner from "../Banner";
import JoinUs from "../JoinUs";
import LoginForm from "../LoginForm";

function index() {
    return (
        <div className="homepage-wrapper">
            <div className="homepage-container-grid" >
                <div className="homepage-banner-col" >
                    <Banner />
                    <JoinUs />
                </div>
                <div className="homepage-login-col" > 
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}

export default index;
