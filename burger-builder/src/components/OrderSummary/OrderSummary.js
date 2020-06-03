import React, { Component } from 'react';
import './OrderSummary.css'

class OrderSummary extends Component {
    render() {
        console.table('summary--',this.props)
        return (
            <div className='orderSummary'>
                <p>OrderSummary </p>
            </div>
        )
    }
}

export default OrderSummary