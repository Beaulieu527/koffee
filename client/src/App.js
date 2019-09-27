import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Nav from './components/Nav'
import Provider from 'react-redux';
import { createStore } from 'redux';

import Login from './components/Login'
import Signup from './components/Signup';
import Homepage from './components/Homepage';
import OrdersContainer from './containers/OrdersContainer'
import ProductsContainer from './containers/ProductsContainer'
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
  return (
  
      <BrowserRouter>
            <div className="App">
            
              <Nav/>
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route path="/products" component={ProductsContainer}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Signup}/>
                    <Route path="/orders" component={OrdersContainer}/>
                  </Switch>
              <Footer/>
             </div>
       </BrowserRouter>
  );
}

export default App;
