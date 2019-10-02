import React, { Component } from 'react';
import Product from '../components/Product';
import { connect } from 'react-redux'
import { addToCart } from '../actions/cartActions';

class ProductsContainer extends Component {


    generateProducts = () => {
        return this.props.products.map((product) => <Product product={product} key={product.id} />)
    }

    render() {
        return (
            <div className="container">
                <h1 className="center">Our Brews</h1>
                <ul className="collection"></ul>
                <br />
                <br />
                <div className="box">
                    <div class="row" >
                        {this.generateProducts()}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products.products,
        addedProducts: state.products.addedProducts
    }
}

export default connect(mapStateToProps, { addToCart })(ProductsContainer);