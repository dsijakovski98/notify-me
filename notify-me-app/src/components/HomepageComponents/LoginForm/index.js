import "./style/style.css";
import React from 'react';
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Button } from "@material-ui/core";

function index() {

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
                />
            </div>

            <div className="login-form-submit">
                <Button
                    variant="contained"
                    fullWidth
                    color="primary">
                    Sign in
                </Button>
            </div>
        </div>
    )
}

export default index;
