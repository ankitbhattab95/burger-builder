import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import classes from './OrderSummary.module.css'
// import './OrderSummary.css'

class OrderSummary extends Component {
    render() {
        let a = new URLSearchParams(this.props.location.search)
        let item = [];
        let key;
        let params = a.toString().split('&')
        let amount = params.pop().split('=')[1]
        let order = []
        for (let i in params) {
            order[i] = params[i].split('=')
        }
        for (let p of order) {
            if (p[1] > 0) {
                key = p + '_' + order
                item.push(
                    <React.Fragment key={key}>
                        < div className="card-text"  >
                            <div className={classes.title}>
                                {p[0]}
                            </div>
                        </div >
                        <div className="card-text">
                            <div className={classes.title}>
                                {p[1]}
                            </div>
                        </div>
                    </React.Fragment>
                )
            }
        }
        return (
            <div className={classes.orderSummary}>
                <div className={["card", classes.card].join(' ')}>
                    <div className="card-body">
                        <h5 className={["card-text", classes.cardTitle].join(' ')}>Order placed Successfully!</h5>
                        <div className={classes.bill}>
                            <div className={["card-text", classes.allBorder].join(' ')} >
                                <div className={classes.title}>Items</div>
                            </div>
                            <div className={["card-text", classes.allBorder].join(' ')}>
                                <div className={classes.title}>Quantity</div>
                            </div>
                            {item}
                            <div className={["card-text", classes.borderTopBottom].join(' ')} >
                                <div className={classes.title}>TOTAL Amount</div>
                            </div>
                            <div className={["card-text", classes.borderTopBottom].join(' ')}>
                                <div className={classes.title}>${amount}</div>
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