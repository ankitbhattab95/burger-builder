import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './OrderSummary.css'

class OrderSummary extends Component {
    render() {
        let a = new URLSearchParams(this.props.location.search)
        let item = [];
        let key;
        for (let p of a) {
            key = p + '_' + a
            item.push(<React.Fragment key={key}>
                < div className="card-text" >
                    <div className='title'>
                        {p[0]}
                    </div>
                </div >
                <div className="card-text">
                    <div className='title'>
                        {p[1]}
                    </div>
                </div>
            </React.Fragment>)
        }
        return (
            <div className='orderSummary'>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Order Summary</h5>
                        <div className="bill">
                            <div className="card-text allBorder" >
                                <div className='title'>Items</div>
                            </div>
                            <div className="card-text allBorder">
                                <div className='title'>Quantity</div>
                            </div>
                            {item}
                            <div className="card-text borderTopBottom" >
                                <div className='title'>TOTAL Amount</div>
                            </div>
                            <div className="card-text borderTopBottom">
                                <div className='title'>TBD</div>
                            </div>
                        </div>
                        <div className='link'>
                            <Link to='/' className="card-link "> Order more</Link>
                            <Link to='/orders' className="card-link btn btn-primary">View All orders</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default React.memo(OrderSummary)