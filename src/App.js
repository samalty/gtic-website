import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import About from './components/About';
import Opportunities from './components/Opportunities';
import Claims from './components/Claims';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/opportunities" component={Opportunities} />
        <Route exact path="/making_a_claim" component={Claims} />
        <Route exact path="/contact" component={Contact} />
      </div>
    )
  }
}

export default App;
