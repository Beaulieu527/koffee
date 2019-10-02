import React, { Component } from 'react';

class Cart extends Component {
    //to remove the product
    handleRemove = (id) => {
        this.props.products.removeProduct(id);
    }
    //to add the quantity
    handleAddQuantity = (id) => {
        this.props.products.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id) => {
        this.props.products.subtractQuantity(id);
    }
    render() {
        return (
            <div>
                <li className="collection-item avatar" key={this.props.addedProduct.id}>
                    <div className="item-img">
                        <img img src="images/c.jpeg" />
                    </div>

                    <div className="item-desc">
                        <span className="title">{this.props.addedProduct.title}</span>
                        <p>{this.props.desc}</p>
                        <p><b>Price: {this.props.addedProduct.price}$</b></p>
                        <p>
                            <b>Quantity: {this.props.addedProduct.quantity}</b>
                        </p>
                        <div className="add-remove">

                            <a className="btn-floating waves-effect waves-light red" onClick={() => { this.handleAddQuantity(this.props.addedProduct.id) }}><i className="material-icons">remove</i></a>
                            <a className="btn-floating waves-effect waves-light red" onClick={() => { this.handleSubtractQuantity(this.props.addedProduct.id) }}><i className="material-icons">add</i></a>
                        </div>
                        <button className="waves-effect waves-light btn pink remove" onClick={() => { this.handleRemove(this.props.addedProduct.id) }}>Remove</button>
                    </div>

                </li>
            </div>
        );
    }
}


export default Cart