import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from './components/layout/Nav'
import { connect } from 'react-redux'
import Login from './components/user/Login'
import Signup from './components/user/Signup';
import Homepage from './components/Homepage';
import OrdersContainer from './containers/OrdersContainer'
import ProductsContainer from './containers/ProductsContainer'
import Footer from './components/layout/Footer';
import CartContainer from './containers/CartContainer';
import { logoutUser } from './actions/usersActions';



class App extends Component {

  render() {
    return (
      [
        <header>

        </header>,

        <main>
          <Router>
            <Nav logout={this.props.logoutUser} />
            <div className="App">
              <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/products" component={ProductsContainer} />
                <Route path="/cart" component={CartContainer} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Signup} />
                <Route path="/orders" component={OrdersContainer} />
              </Switch>
            </div>
          </Router>
        </main>,

        <Footer />

      ]



    );
  }
}


const mapStateToProps = state => ({
  products: state.products,
  currentUser: state.currentUser
})

const mapDispatchToProps = dispatch => ({

  logoutUser: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

