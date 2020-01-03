import React from 'react';
import ReactDOM from 'react-dom';

import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Link, 
  Redirect } 
from "react-router-dom";

import Home from "./component/home/Home.jsx"
import Portfolio from "./component/portfolio/Portfolio.jsx"
import Contact from "./component/contact/Contact.jsx"

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
)


ReactDOM.render(
  routing,
  document.getElementById('root')
);
