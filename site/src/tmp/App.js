import React, { Component } from 'react';
import './App.css';

import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Link, 
  Redirect } 
from "react-router-dom";

// Pages
import MainPage from "./pages/index";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/hello" component={MainPage} />
      </Router>
    )
  }
}

export default App;
