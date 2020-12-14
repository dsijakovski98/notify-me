import "./style/style.css";
import LoginFormPresenter from "./LoginFormPresenter";
import React, { useState } from 'react';

function LoginFormContainer() {

    const [usernameInput, setUsernameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    const signIn = (e) => {
        e.preventDefault();
        console.log(usernameInput);
        console.log(passwordInput);
    }

    return (
        <LoginFormPresenter 
            usernameInput={usernameInput} setUsername={setUsernameInput}
            passwordInput={passwordInput} setPassword={setPasswordInput}
            signIn={signIn}
        />
    )
}

export default LoginFormContainer;
