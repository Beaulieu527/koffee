import React, { Component } from 'react';
import Order from '../components/Order';

class OrdersContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="container">
                <h1 className="center">Your Past Orders</h1>
                <ul className="collection"></ul>
                <br/>
                <br/>
                <div className="box">
                    <Order/>
                </div>
            </div>
        );
    }
}

export default OrdersContainer;