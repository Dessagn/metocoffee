import React, { Component } from 'react';
import { Switch, NavLink, Route } from 'react-router-dom';

import Home from './components/Home';
import Tour from './components/Tour';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navabar-default">
          <div className="header-nightsky">
            <div className="container">
              <a href="/" className="navbar-brand"><h1>Meto Coffee</h1></a>
              <div className="navbar-header">
                <button type="button" data-toggle="collapse" data-target=".navbar-collapse" className="navbar-toggle">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
              <div id="myNavbar" className="collapse navbar-collapse">
                  <ul className="nav navbar-nav navbar-right">
                    <li> <NavLink activeClassName='active' exact to = "/">Home</NavLink> </li>
                    <li> <NavLink activeClassName='active' to = "/products">Products</NavLink> </li>
                    <li> <NavLink activeClassName='active' to = "/about">Tour</NavLink> </li>
                    <li> <NavLink activeClassName='active' to = "/contact">Contact</NavLink> </li>
                  </ul>
              </div>
            </div>
          </div>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/about" component={Tour} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </nav>
        <Footer />
      </div>
    );
  }
}

export default App;
