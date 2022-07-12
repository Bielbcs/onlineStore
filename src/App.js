import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import ShoppingCart from './pages/ShoppingCart';
import Details from './pages/Details';
import Checkout from './pages/Checkout';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/cart" component={ ShoppingCart } />
          <Route path="/details" component={ Details } />
          <Route path="/checkout" component={ Checkout } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
