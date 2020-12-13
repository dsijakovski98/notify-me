import "./style/style.css";
import React from 'react';
import Button from "@material-ui/core/Button";
import PersonAddIcon from '@material-ui/icons/PersonAdd';

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
    return (
        <div className="join-us-wrapper">
            <Button variant="contained" color="primary"
             startIcon={<PersonAddIcon style={styles.mediumIcon} />} >
                Join Us
            </Button>
        </div>
    )
}

export default index
