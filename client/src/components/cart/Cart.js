import React, { Component } from 'react';

class Cart extends Component {

    render() {
        return (
            <div>
                <li className="collection-item avatar" key={this.props.id}>
                    <div className="item-img">
                        <img img src="images/c.jpeg" />
                    </div>

                    <div className="item-desc">
                        <span className="title">{this.props.title}</span>
                        <p>{this.props.desc}</p>
                        <p><b>Price: {this.props.price}$</b></p>
                        <p>
                            <b>Quantity: {this.props.quantity}</b>
                        </p>
                        <div className="add-remove">
                            <a href="/cart"><i className="material-icons" onClick={() => { this.handleAddQuantity(this.props.id) }}>arrow_drop_up</i></a>
                            <a href="/cart"><i className="material-icons" onClick={() => { this.handleSubtractQuantity(this.props.id) }}>arrow_drop_down</i></a>
                        </div>
                        <button className="waves-effect waves-light btn pink remove" onClick={() => { this.handleRemove(this.props.id) }}>Remove</button>
                    </div>

                </li>
            </div>
        );
    }
}

export default Cart;