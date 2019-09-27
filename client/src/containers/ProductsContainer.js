import React, { Component } from 'react';
import Products from '../components/Products';

class ProductsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
                id:1, 
                name:'1',
                description:'sdfhjklahfadsjklhfhsdh',
                price:2
         };
    }
    render() {
        return (
            <div className="container">
                <h1 className="center">Our Brews</h1>
                <br/>
                <br/>
                <div className="box">
                    <Products />
                </div>
            </div>
        );
    }
}

export default ProductsContainer;