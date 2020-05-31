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
                    addIngredient={props.addIngredient}
                    subIngredient={props.subIngredient}
                />
            </div>)
    })

    

    return (
        <div className={["roundd",classes.box].join(" ")}>
            <Checkout amount={props.amount}/>
            <span className={classes.amount}>
                Total Amount = <strong>{props.amount}</strong>
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