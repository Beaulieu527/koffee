import React, { Component } from 'react';
import Total from '../components/cart/Total';
import Cart from '../components/cart/Cart';


import { connect } from 'react-redux';

class CartContainer extends Component {
    
    generateCarts = () => {
        return this.props.cartProducts.map((cartProduct) => <Cart product={cartProduct} key={cartProduct.id} remove={this.props.removeProduct} add={this.props.addQuantity} subtract={this.props.subtractQuantity} />)
    }
    render() {
        return (
            <div className="container">
                <div className="cart">
                    <h1
                        style={{
                            textAlign: 'center',
                            fontSize: '100px'
                        }}
                    >You have ordered:</h1>
                    <ul className="collection"></ul>
                    <br />
                    <br />
                    <ul className="collection">
                        {this.generateCarts()}
                    </ul>
                </div>
                <br />
                <Total />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.products.products,
        cartProducts: state.cart.cartProducts
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeProduct:(id) => dispatch({ type: "REMOVE_PRODUCT", id }),
        addQuantity:(id) => dispatch({ type: "ADD_QUANTITY", id }),
        subtractQuantity:(id) => dispatch({ type: "SUBTRACT_QUANTITY", id })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)