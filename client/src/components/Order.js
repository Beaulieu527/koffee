import React, { Component } from 'react';
import Product from "./Product"
import { connect } from 'react-redux';

class Order extends Component {

    generateProducts = () => {
        return this.props.order.products.map((product) => <Product handleAdd={this.props.addToCart} product={product} />)
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col s12 m12">
                        <div className="card-panel">
                            <table className="responsive-table">
                                <thead>
                                    <tr>
                                        <th>Order {this.props.index}</th>
                                        <th>Total ${this.props.order.amount}</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {this.generateProducts()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => dispatch({ type: "ADD_TO_CART", product })
    }
}

export default connect(null,mapDispatchToProps) (Order);