import React from 'react'
import { withRouter } from "react-router-dom";

function RegisterPage(props) {
    console.log(props);
    const type = props.match.params.type;

    return (
        <div>
            This is the register page for {type}
        </div>
    )
}

export default withRouter(RegisterPage);
