import React, { Component } from 'react';
import './Orders.css'
import Order from './Order/Order'
import axios from 'axios'
import Spinner from '../Spinner/Spinner'
import classes from './Order/Order.module.css'


class Orders extends Component {
    state = null;
    show = (<Spinner />);
    childOrder = null;
    async componentDidMount() {
        try {
            let response = await axios({ url: '/orders', baseURL: 'http://localhost:' + process.env.PORT || '4000' })
            let res = response.data.reverse()
            let item = []
            let items = []
            let orders = []
            let keys = []
            for (let i in res) {
                orders.push(res[i].order)
                keys.push(res[i]._id)
            }
            for (let i of orders) {
                item = []
                for (let j in Object.keys(i)) {
                    if (Object.values(i)[j] > 0) {

                        item.push(
                            <React.Fragment key={j + '_' + keys[i]}>
                                < div className="card-text"  >
                                    <div className={classes.title}>
                                        {Object.keys(i)[j]}
                                    </div>
                                </div >
                                <div className="card-text">
                                    <div className={classes.title}>
                                        {Object.values(i)[j]}
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                    }

                }
                items.push(item)
            }

            this.childOrder = Object.keys(res).map(order => {
                return (
                    <Order key={res[order]._id}
                        id={res[order]._id}
                        date={new Date(res[order].date.toString())}
                        amount={res[order].amount}
                        item={items[order]} />)
            })
            this.show = this.childOrder
            this.setState({ updated: true })
        }
        catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div className='orders'>
                {this.show}
            </div>
        )
    }
}

export default Orders