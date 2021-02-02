import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/HomepageComponents/Homepage/Homepage";
import RegisterPage from "./components/RegisterPageComponents/RegisterPage/RegisterPage";
import { Switch, Route, withRouter } from "react-router-dom";
import UserHomepageContainer from "./components/UserHomepageComponents/UserHomepage/UserHomepageContainer";
import PostsListPageContainer from "./components/UserHomepageComponents/Posts/PostsListPage/PostsListPageContainer"
import CompanyHomepageContainer from "./components/CompanyHomepageComponents/CompanyHomepage/CompanyHomepageContainer"
import SubscribePageContainer from "./components/UserHomepageComponents/SubscribePage/SubscribePageContainer";

function App(props) {

  const rootPage = "/notify-me-RST";
  const location = props.location.pathname;
  

  // Set document title
  useEffect(() => {

    switch(location) {
      case `${rootPage}/register/user`:
      case `${rootPage}/register/company`:
        document.title = "Notify Me - Register";
        break;
      case `${rootPage}`:
        document.title = "Notify Me - Home";
        break;
      default:
        return null;
    }

  }, [location]);

  return (

      <div className="main-wrapper">
          <Switch>
            <Route path={`${rootPage}`} exact component={Homepage} />
            <Navbar />
          </Switch>
            <Route path={`${rootPage}/register/:type`} exact component={RegisterPage} />
          {/* TODO: Add more page routes */}
            <Route path={`${rootPage}/user-page`} exact component={UserHomepageContainer} />
            <Route path={`${rootPage}/user-page/posts/:type`} exact component={PostsListPageContainer} />
            <Route path={`${rootPage}/company-page`} exact component={CompanyHomepageContainer} />
            <Route path={`${rootPage}/subscribe/:type`} exact component={SubscribePageContainer} />
      </div>

  );  
}

export default withRouter(App);
