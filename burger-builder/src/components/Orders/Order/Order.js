import React from 'react'
import classes from './Order.module.css'

const Order = (props) => {
    return (
        <div>
            {/* <div className={classes.orderSummary}> */}
            <div className={["card", classes.card].join(' ')}>
                <div className="card-body"> 
                    <h5 className={[classes.cardTitle].join(' ')}> Order Placed on {props.date.toDateString()} at {props.date.toLocaleTimeString()} </h5>
                    <h6 className={["card-subtitle mb-2 text-muted", classes.subtitle].join(' ')}>
                        Order ID #{props.id}
                    </h6>
                    <div className={classes.bill}>
                        <div className={["card-text", classes.allBorder].join(' ')} >
                            <div className={classes.title}>Items</div>
                        </div>
                        <div className={["card-text", classes.allBorder].join(' ')}>
                            <div className={classes.title}>Quantity</div>
                        </div>
                        {props.item}
                        <div className={["card-text", classes.borderTopBottom].join(' ')} >
                            <div className={classes.title}>TOTAL Amount</div>
                        </div>
                        <div className={["card-text", classes.borderTopBottom].join(' ')}>
                            <div className={classes.title}>${props.amount}</div>
                        </div>
                    </div>
                    {/* <div className='link'>
                        <Link to='/' className="card-link "> Order more</Link>
                        <Link to='/orders' className="card-link btn btn-primary">View All orders</Link>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Order;