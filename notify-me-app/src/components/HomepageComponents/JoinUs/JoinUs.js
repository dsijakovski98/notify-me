import "./style/style.css";
import React from 'react';
import Button from "@material-ui/core/Button";
import PersonIcon from '@material-ui/icons/Person';
import BusinessIcon from '@material-ui/icons/Business';
import { Link } from "react-router-dom";
// import Zoom from "@material-ui/core/Zoom";
// import { motion } from "framer-motion";

const styles = {
    mediumIcon: {
        width: 40,
        height: 40,
    },
  };

function JoinUs() {
    const rootPage = "/notify-me-RST";

    return (
        <div className="join-us-wrapper">
                <Link to={`${rootPage}/register/user`}>
                    <Button variant="contained" color="primary"
                    startIcon={<PersonIcon style={styles.mediumIcon} />} >
                        Join as User
                    </Button>
                </Link>
                <Link to={`${rootPage}/register/company`}>
                    <Button variant="contained" color="primary"
                    startIcon={<BusinessIcon style={styles.mediumIcon} />} >
                        Join as Company
                    </Button>
                </Link>
        </div>
    )
}

export default JoinUs;
