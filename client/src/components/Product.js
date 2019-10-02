import React, { Component } from 'react';



class Product extends Component {

    handleClick = (id) => {
        this.props.product.addedProducts.addToCart(id);
    }

    render() {
        return (
            <div className="col s12 m6 l4 xl4">
                <div className="card" key={this.props.product.id}>
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src="images/c.jpeg"/>
                     </div>
                    <div className="card-content">
                    <a className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => { this.handleClick(this.props.product.id) }}><i className="material-icons">add</i></a>
                        <span className="card-title activator grey-text text-darken-4">{this.props.product.name}<i className="material-icons right">more_vert</i></span>
                        <h6>${this.props.product.price} </h6>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">{this.props.product.name}<i className="material-icons right">close</i></span>
                        <p>{this.props.product.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}
        
        
export default Product