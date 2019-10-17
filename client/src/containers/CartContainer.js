import React, { Component } from 'react';
import Total from '../components/cart/Total';
import Cart from '../components/cart/Cart';


import { connect } from 'react-redux';
import { placeOrdersFetch } from '../actions/usersActions';




class CartContainer extends Component {

    handleClick = () => {
       this.props.placeOrder(this.props.cartProducts)
        // this.props.placeOrder(this.props.cartProducts)
        console.log(this.props.cartProducts)
        this.props.history.push('/orders')
    }

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
                <Total total={this.props.total} />
                <div className="checkout">
                    <button className="waves-effect waves-light btn" onClick={() => this.handleClick()} >Checkout</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.products.products,
        cartProducts: state.cart.cartProducts,
        total: state.cart.total                             
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        placeOrder: (orders) => dispatch(placeOrdersFetch(orders)),
        removeProduct: (id) => dispatch({ type: "REMOVE_PRODUCT", id }),
        addQuantity: (id) => dispatch({ type: "ADD_QUANTITY", id }),
        subtractQuantity: (id) => dispatch({ type: "SUBTRACT_QUANTITY", id })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)