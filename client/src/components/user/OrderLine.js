import React, { Component } from 'react';

class OrderLine extends Component {

    render() {
        return (
            <div>
                <tr>
                    <td>Cofee</td>
                    <br/>
                    <td>1</td>
                    <br/>
                    <td>$0.87</td>
                </tr>
            </div>
        );
    }
}

export default OrderLine;