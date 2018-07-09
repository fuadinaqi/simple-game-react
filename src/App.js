import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import LandingPage from './components/landingPage'
import MainPage from './components/mainPage'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/landing' component={LandingPage} />
          <Route exact path='/main' component={MainPage} />
          <Redirect to={'/landing'} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
