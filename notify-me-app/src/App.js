import React from "react";
import Homepage from "./components/HomepageComponents/Homepage";
import RegisterPage from "./components/RegisterPageComponents/RegisterPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const rootPage = "/notify-me-RST";

  return (
    <Router>
      <div className="main-wrapper">
        <Route path={`${rootPage}`} exact component={Homepage} />
        <Route path={`${rootPage}/register`} exact component={RegisterPage} />
        {/* TODO: Add more page routes */}
      </div>
    </Router>
  );  
}

export default App;
