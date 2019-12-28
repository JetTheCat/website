import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Link, 
  Redirect } 
from "react-router-dom";
import Home from "../component/home/Home.jsx"

class App extends Component {

  componentDidMount() {
    document.body.style.backgroundColor = "white"
  }

  render() {
    return (
      <div>
        <Home />
      </div>
    )
  }
}

export default App;
