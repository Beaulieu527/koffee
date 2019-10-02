import React, { Component } from 'react';
import Total from '../components/cart/Total';
import Cart from '../components/cart/Cart';
import { removeProduct, addQuantity, subtractQuantity } from '../actions/cartActions';

import { connect } from 'react-redux';

class CartContainer extends Component {
    
    generateCarts = () => {
        return this.props.addedProducts.map((addedProduct) => <Cart product={addedProduct} key={addedProduct.id} />)
    }
    render() {
        return (
            <div className="container">
                <div className="cart">
                    <h1
                        style={{
                            textAlign: 'center',
                            fontSize: '100px'
                        }}
                    >You have ordered:</h1>
                    <ul className="collection"></ul>
                    <br />
                    <br />
                    <ul className="collection">
                        {this.generateCarts}
                    </ul>
                </div>
                <br />
                <Total />
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return{
        addedProducts: state.addedProducts,
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeProduct(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)( CartContainer)