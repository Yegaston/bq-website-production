import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import EventUpload from './components/eventUpload';
import Landing from './components/Landing';

function Index() {
  return <Landing />
}

function Carga() {
  return <EventUpload />
}
function Gestion() {
  return <h1>Gestion</h1>
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav className="light-blue accent-1">
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">bq Eventos</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/carga/">Carga</Link></li>
              <li><Link to="/gestion/">Gestion</Link></li>
            </ul>
          </div>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/carga/" component={Carga} />
        <Route path="/gestion/" component={Gestion} />
      </div>
    </Router>
  )
}
export default AppRouter;
