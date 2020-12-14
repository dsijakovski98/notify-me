import "./style/style.css";
import React from 'react';
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Button } from "@material-ui/core";

function LoginFormPresenter({username, setUsername, password, setPassword, signIn}) {

    return (
        <div className="login-form-wrapper">
            
            <div className="login-form-inputs">
                <Avatar style={{
                    backgroundColor: '#3f51b5'
                }} >
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" >Sign in</Typography>
                
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="email"
                    label="Email"
                    type="email"
                    id="email"
                    autoComplete="current-email"
                    color="primary"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>

            <div className="login-form-submit">
                <Button
                    variant="contained"
                    fullWidth
                    color="primary"
                    onClick={e => signIn(e)} >
                    Sign in
                </Button>
            </div>
        </div>
    )
}

export default LoginFormPresenter
