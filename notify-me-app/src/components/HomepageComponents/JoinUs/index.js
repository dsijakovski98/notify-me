import "./style/style.css";
import React from 'react';
import Button from "@material-ui/core/Button";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { Link } from "react-router-dom";

const styles = {
    largeIcon: {
      width: 130,
      height: 120,
    },
    mediumIcon: {
        width: 40,
        height: 40,
    },
    smallIcon: {
        width: 50,
        height: 50,
    },
  };

function index() {
    const rootPage = "/notify-me-RST";

    return (
        <div className="join-us-wrapper">
            <Link to={`${rootPage}/register`}>
                <Button variant="contained" color="primary"
                startIcon={<PersonAddIcon style={styles.mediumIcon} />} >
                    Join Us
                </Button>
            </Link>
        </div>
    )
}

export default index
