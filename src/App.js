import React from 'react';
import logo from './logo.svg';
import './App.scss';
import NavBar from './components/nav/nav-bar';
import { FooterBar } from './components/footer/footer-bar';
import Home from './components/global-feed/home';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp';
// import isLoggerdIn from './isLoggedIn'
function App() {
  // if(!isLoggerdIn()){
  //   return <Redirect to="/login" />
  // }
  return (
    <div className="App">
      <Router>
        <header>
          <NavBar />
        </header>
        <main>
          <div className="section-container">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/home" component={Home} />
              <Route path="/signup" component={SignUp} />
            </Switch>
          </div>
        </main>
      </Router>
      <footer>
        <div className="section-container">
          <FooterBar></FooterBar>
        </div>
      </footer>
    </div>
  );
}

export default App;
