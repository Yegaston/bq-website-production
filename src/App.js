import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import EventUpload from './components/eventUpload';
import Landing from './components/Landing';
import Gestion from './components/Gestion';

import firebase from './providers/firebase-config';
import M from 'materialize-css';

var UserEmail = "";



function Index() {
  return <Landing />
}

function Carga() {
  return UserEmail ?  <EventUpload />: <Login />
}
function Eventlist() {
  return <Gestion />
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav className="light-blue accent-1">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">bq Eventos</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/carga/">Carga</Link></li>
              <li><Link to="/gestion/">Eventos</Link></li>
            </ul>
          </div>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/carga/" component={Carga} />
        <Route path="/gestion/" component={Eventlist} />
      </div>
    </Router>
  )
}

class Login extends Component {
  constructor(){
    super();


    this.state = {
      user: '',
      password: '',
    }

    this.inputHandler = this.inputHandler.bind(this);
    this.loginClick = this.loginClick.bind(this);
  }

  inputHandler(e) {
    const { name, value } = e.target

    this.setState({
      [name]: value
    })
  }

  async loginClick(){
    console.log(this.state.email, this.state.password);

    try {
      await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
      UserEmail = this.state.email;
      M.toast({ html: 'Usuario Logeado' });
    }

    catch(err){
      console.log(err);
    }
  }



  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12 m6">
            <div className="card">
              <div className="card-content white-text">
                <h5 className="card-title grey darken-4">Login</h5>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="email" type="email" name="email" className="validate" onChange={this.inputHandler} />
                    <label htmlFor="email">Email</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="password" type="password" name="password" onChange={this.inputHandler} className="validate" />
                    <label htmlFor="password">Password</label>
                  </div>
                </div>
              </div>
              <div className="card-action">
                <button onClick={this.loginClick}>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AppRouter;
