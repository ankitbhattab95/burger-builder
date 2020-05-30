import React, { useState } from 'react';
import Aux from '../Aux/Aux'
import Buildcontrol from './Buildcontrol/Buildcontrol'
import classes from '../../css-modules/Burgerbuilder.module.css'
import Checkout from '../Checkout/checkout';
import Backdrop from '../Backdrop/Backdrop';


// const input = {
//     ingredients: {
//         cheese: 0,
//         patty: 1,
//         salad: 2
//     }
// }
const Buildcontrols = (props) => {
    const childCondtrols = Object.keys(props.ingredients).map((ingredient, index) => {
        return (
            <div key={index} >
                <Buildcontrol
                    ingredient={ingredient}
                    count={props.ingredients[ingredient]}
                    index={index}
                    addIngredient={props.addIngredient}
                    subIngredient={props.subIngredient}
                />
            </div>)
    })

    return (
        <div>
            {(props.isCheckout) ? <Checkout cancel={props.checkout} amount={props.amount}/> : null}
            {/* {(props.isCheckout) ? <Backdrop/> : null} */}
        
            <span className={classes.amount}>
                Total Amount = <strong>{props.amount}</strong>
            </span>
            {childCondtrols}
            <button onClick={props.checkout}
                className={classes.orderButton}>
                Order now
            </button>
        </div>
        // </Aux>
    )


}
export default Buildcontrols;   