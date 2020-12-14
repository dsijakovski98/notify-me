import "./style/style.css";
import React from "react";
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import useCurrentWidth from "../../../customHooks/useCurrentWidth";



function Banner() {

    const currentWidth = useCurrentWidth();
    const styles = {
        iconSize: {
          width: currentWidth / 10,
          height: currentWidth / 10,
        },
      };

    return (
        <div className="banner-wrapper">
            <div className="banner-logo-wrapper">
                <NotificationsActiveIcon 
                style={
                    styles.iconSize
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

export default Banner
