import React, { Component } from 'react';
import Order from '../components/Order';
import { connect } from 'react-redux';

class OrdersContainer extends Component {
        
    generateOrders = () => {
        console.log(this.props.orders)
        return this.props.orders.map((order, index) => <Order index={index + 1} order={order} key={order.id} />)
    }
    render() {
        return (
            <div className="container">
                <h1 className="center">Your Past Orders</h1>
                <ul className="collection"></ul>
                <br/>
                <br/>
                <div className="box">
                    {this.generateOrders()}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        orders: state.user.orders
    }
}

export default connect(mapStateToProps)(OrdersContainer);