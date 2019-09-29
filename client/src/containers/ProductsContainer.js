import React, { Component } from 'react';
import Product from '../components/Product';
import { connect } from 'react-redux'
import { addToCart } from '../actions/CartActions';

class ProductsContainer extends Component {
    

    generateProducts = () => {
        return this.props.products.map((product) => <Product product={product} />)
    }

    render() {
        return (
            <div className="container">
                <h1 className="center">Our Brews</h1>
                <ul className="collection"></ul>
                <br />
                <br />
                <div className="box">
                    {this.generateProducts()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products.products
    }
}

export default connect(mapStateToProps, {addToCart}) (ProductsContainer);