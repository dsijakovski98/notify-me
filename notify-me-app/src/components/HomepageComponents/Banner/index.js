import "./style/style.css";
import React, { useEffect } from "react";
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';

const styles = {
    largeIcon: {
      width: 130,
      height: 120,
    },
  };

function index() {
    

    return (
        <div className="banner-wrapper">
            <div className="banner-logo-wrapper">
                <NotificationsActiveIcon 
                style={
                    styles.largeIcon
                }
                 color="primary" />
            </div>

            <div className="banner-app-name">
                <h1 className="banner-title">Notify-Me</h1>
                <h4 className="banner-subtitle">Notification App</h4>
            </div>

        </div>
    )
}

export default index
