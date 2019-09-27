import React, { Component } from 'react';

class Products extends Component {

    render() {
        return (
            <div class="row">
                <div class="col s12 m6 l3 xl3">
                <div class="card">
                    <div class="card-image">
                    <img src="images/c.jpeg"/>
                    <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                    </div>
                    <div class="card-content">
                    <h5>{this.props.name}</h5>      
                    <p>{this.props.description}</p>
                    <h6>${this.props.price} </h6>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
Products.defaultProps =  {
    id:1, 
    name:'DarkROast',
    description:'sdfhjklahfadsjklhfhsdh',
    price:2
}

export default Products