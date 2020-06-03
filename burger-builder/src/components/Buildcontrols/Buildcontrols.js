import React, { useState } from 'react';
import Aux from '../Aux/Aux'
import Buildcontrol from './Buildcontrol/Buildcontrol'
import classes from '../../css-modules/Burgerbuilder.module.css'
import Checkout from '../Checkout/checkout';

const Buildcontrols = (props) => {
    const childCondtrols = Object.keys(props.ingredients).map((ingredient, index) => {
        return (
            <div key={index} >
                <Buildcontrol
                    ingredient={ingredient}
                    count={props.ingredients[ingredient]}
                    index={index}
                    cost={props.cost}
                    addIngredient={props.addIngredient}
                    subIngredient={props.subIngredient}
                />
            </div>)
    })

    

    return (
        <div className={["rounded",classes.box].join(" ")}>
            <Checkout className={classes.checkout} confirm={props.confirm} amount={props.amount}/>
            <span className={classes.amount}>
                Total Amount = <strong>${props.amount}</strong>
            </span>
            {childCondtrols}
            <button 
                type="button"
                className={[classes.order,"btn","btn-primary"].join(" ")}
                data-toggle="modal"
                data-target="#exampleModalCenter"
                onClick={props.checkout}
            >
                Order Now
            </button>
        </div>
        // </Aux>
    )


}
export default Buildcontrols;   