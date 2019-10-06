import React, { Component } from 'react';

class Cart extends Component {
    //to remove the product
    handleRemove = () => {
        this.props.remove(this.props.product.id);
    }
    //to add the quantity
    handleAddQuantity = () => {
        this.props.add(this.props.product.id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = () => {
        this.props.subtract(this.props.product.id);
    }
    render() {
        return (
            <div>
                <li className="collection-item avatar" key={this.props.product.id}>
                    <div className="item-img">
                        <img img src="images/c.jpeg" alt="image"/>
                    </div>

                    <div className="item-desc">
                        <span className="title">{this.props.product.title}</span>
                        <p>{this.props.description}</p>
                        <p><b>Price: ${this.props.product.price}</b></p>
                        <p>
                            <b>Quantity: {this.props.product.quantity}</b>
                        </p>
                        <div className="add-remove">
                            <button className="btn-floating waves-effect waves-light red" onClick={() => { this.handleSubtractQuantity() }}><i className="material-icons">remove</i></button>
                            <button className="btn-floating waves-effect waves-light red" onClick={() => { this.handleAddQuantity() }}><i className="material-icons">add</i></button>
                        </div>
                        <button className="waves-effect waves-light btn pink remove" onClick={() => { this.handleRemove() }}>Remove</button>
                    </div>

                </li>
            </div>
        );
    }
}


export default Cart