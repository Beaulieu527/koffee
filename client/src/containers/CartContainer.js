import React, { Component } from 'react';
import Total from '../components/cart/Total';
import Cart from '../components/cart/Cart';

class CartContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
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
                        <Cart />
                    </ul>
                </div>
                <br />
                <Total />
            </div>
        );
    }
}

export default CartContainer;