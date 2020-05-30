import React from 'react'
import './Checkout.css'
import Aux from '../Aux/Aux'
const Checkout = (props) => {
    return (
        <Aux>
            <div className="checkout">
                <h2>Total Amount = {props.amount} </h2>
                <p> Are you sure you want to Checkout?</p>
                <button className='button' onClick={props.cancel}>Cancel</button>
                <button>Continue</button>
            </div>

        </Aux>

    )
}

export default React.memo(Checkout);
