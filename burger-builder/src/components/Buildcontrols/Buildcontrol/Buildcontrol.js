import React from 'react';
import Aux from '../../Aux/Aux'
import classes from '../../../css-modules/Burgerbuilder.module.css'

const Buildcontrol = (props) => {
    let disableButton = true
    if (props.count > 0) {
        disableButton = false
    }
    return (
        <div className={[classes.update, "rounded"].join(" ")}>
            <div>
                {props.ingredient}
                {console.log('----',props.ingredient)}
                <span> (${props.cost[props.ingredient]})</span>
            </div>
            <div>
                <button
                    className={classes.button}
                    onClick={props.subIngredient}
                    index={props.index} disabled={disableButton} >
                    -
                </button>
                {props.count}
                <button
                    className={classes.button}
                    onClick={props.addIngredient}
                    index={props.index} >
                    +
                </button>
            </div>
        </div>
    )
}
export default Buildcontrol;