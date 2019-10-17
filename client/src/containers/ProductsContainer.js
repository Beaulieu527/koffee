import React, { Component } from 'react';
import Product from '../components/Product';
import { connect } from 'react-redux'

//import { addToCart } from '../actions/cartActions';
import { fetchProducts } from '../actions/productActions';

class ProductsContainer extends Component {

    componentDidMount(){
        this.props.fetchProducts()
    }


    generateProducts = () => {
        return this.props.products.map((product) => <Product handleAdd={this.props.addToCart} product={product} key={product.id} />)
    }

    render() {
        return (
            <div className="container">
                <h1 className="center">Our Brews</h1>
                <ul className="collection"></ul>
                <br />
                <br />
                <div className="box">
                    <div className="row" >
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
        cartProducts: state.cart.cartProducts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => dispatch(fetchProducts()), 
        addToCart: (product) => dispatch({ type: "ADD_TO_CART", product })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);