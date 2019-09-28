import React, { Component } from 'react';

class Product extends Component {

    handleClick = (id) => {
        this.props.addToCart(id);
    }

    render() {
        return (
            <div class="row">
                <div class="col s12 m6 l3 xl3">
                    <div class="card" key={this.props.product.id}>
                        <div class="card-image">
                            <img src="images/c.jpeg" />
                            <a class="btn-floating halfway-fab waves-effect waves-light red" onClick={() => { this.handleClick(this.props.product.id) }}><i class="material-icons">add</i></a>
                        </div>
                        <div class="card-content">
                            <h5>{this.props.product.name}</h5>
                            <ul className="collection"></ul>
                            <p>{this.props.product.description}</p>
                            <h6>${this.props.product.price} </h6>
                            <ul className="collection"></ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Product