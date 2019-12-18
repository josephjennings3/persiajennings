import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home.js';
import Stats from './pages/stats.js';
import Gallery from './pages/gallery.js';
import Dedication from './pages/dedication.js';



function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
      <Switch>
          <Route exact path= '/pages/home'  component={Home} />
          <Route exact path= '/pages/stats'  component={Stats} />
          <Route exact path= '/pages/gallery'  component={Gallery} />
          <Route exact path= '/pages/dedication'  component={Dedication} />
        </Switch>
        <Footer />
      </div> 
    </div>
  );
}

export default App;
