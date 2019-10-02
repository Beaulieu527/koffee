import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Nav from './components/layout/Nav'
import { connect } from 'react-redux'
import Login from './components/user/Login'
import Signup from './components/user/Signup';
import Homepage from './components/Homepage';
import OrdersContainer from './containers/OrdersContainer'
import ProductsContainer from './containers/ProductsContainer'
import Footer from './components/layout/Footer';
import CartContainer from './containers/CartContainer';
import { fetchProducts } from './actions/productActions';


class App extends Component {

  componentDidMount() {
    this.props.fetchProducts()
  }
  render() {
    return (
      [
        <header>
          <Nav />
        </header>,

        <main>
          <BrowserRouter>
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
          </BrowserRouter>
        </main>,

        <Footer />

      ]



    );
  }
}

let mapStateToProps = (state) => { return { products: state.products } }
export default connect(mapStateToProps, { fetchProducts })(App)

