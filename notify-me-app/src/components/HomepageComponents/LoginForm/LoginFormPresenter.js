import "./style/style.css";
import React from 'react';
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Button } from "@material-ui/core";
import InputAdornment from '@material-ui/core/InputAdornment';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import VpnKeyRoundedIcon from '@material-ui/icons/VpnKeyRounded';


function LoginFormPresenter(props) {

    return (
        <form className="login-form-wrapper" onSubmit={e => e.preventDefault()} method="POST">
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
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <MailOutlineIcon style={{color: 'whitesmoke'}} />
                              </InputAdornment>
                            ),
                          }}
                        name="email"
                        label="Email"
                        type="email"
                        id="email"
                        helperText={props.emailError}
                        error={props.emailError.length ? true : false}
                        value={props.email}
                        onChange={e => props.setEmail(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <VpnKeyRoundedIcon style={{color: 'whitesmoke'}} />
                              </InputAdornment>
                            ),
                          }}
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        helperText={props.passwordError}
                        error={props.passwordError.length ? true : false}
                        value={props.password}
                        onChange={e => props.setPassword(e.target.value)}
                    />
                </div>

                <div className="login-form-submit">
                    <Button
                        variant="contained"
                        fullWidth
                        type="submit"
                        color="primary"
                        onClick={e => props.signIn(e)} >
                        Sign in
                    </Button>
                </div>
        </form>
    )
}

export default LoginFormPresenter
