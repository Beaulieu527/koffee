import React, { Component } from 'react';
import OrderLine from './user/OrderLine';

class Order extends Component {
    
    render() {
        return (
            <div>
            <div class="row">
               <div class="col s12 m4">
                   <div class="card-panel">
                       <table class="responsive-table">
                           <thead>
                           <tr>
                               <th>Item Name</th>
                               <th>Quantiy</th>
                               <th>Price</th>
                           </tr>
                           </thead>

                           <tbody>
                               <OrderLine/>
                           </tbody>
                       </table>
                   </div>
               </div>
           </div>
       </div>
        );
    }
}

export default Order;