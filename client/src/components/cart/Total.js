import React, { Component } from 'react';

class Total extends Component {
  
    render() {
        return (
            <div className="container">
            <div className="collection">
                    <li className="collection-item"><b>Total: {this.props.total} $</b></li>
                </div>
                <div className="checkout">
                    <button className="waves-effect waves-light btn">Checkout</button>
                </div>
             </div>    
        );
    }
}

export default Total;