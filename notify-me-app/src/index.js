import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./firebase/auth";

ReactDOM.render(
  <AuthProvider>
    <Router>
      <App />
    </Router>
  </AuthProvider>,
  document.getElementById('root')
);

