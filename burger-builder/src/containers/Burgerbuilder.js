import React, { PureComponent } from 'react';
import Aux from '../components/Aux/Aux'
import Burger from '../components/Burger/Burger'
import Buildcontrols from '../components/Buildcontrols/Buildcontrols';
import classes from '../css-modules/Burgerbuilder.module.css'
// import Backdrop from '../components/Backdrop/Backdrop'


class Burgerbuilder extends PureComponent {

    state = {
        ingredients: {
            cheese: 0,
            patty: 0,
            salad: 0
        },
        amount: 0,
        checkout: false
    }
    cost = {
        cheese: 5,
        patty: 10,
        salad: 5
    }
    updatedIngredients = null;
    count;
    type

    addIngredient = (event) => {
        let index = event.target.getAttribute('index')
        this.updatedIngredients = { ...this.state.ingredients }
        let increasedIngredient = Object.keys(this.updatedIngredients)[index]
        this.updatedIngredients[increasedIngredient] = this.updatedIngredients[increasedIngredient] + 1
        this.setState({ ingredients: this.updatedIngredients })
        this.setTypeAndCount(this.updatedIngredients[increasedIngredient], increasedIngredient)
        this.updateAmount(this.updatedIngredients)
    }
    setTypeAndCount(count, type) {
        this.count = count;
        this.type = type;
    }
    subIngredient = (event) => {
        let index = event.target.getAttribute('index')
        this.updatedIngredients = { ...this.state.ingredients }
        let increasedIngredient = Object.keys(this.updatedIngredients)[index]
        this.updatedIngredients[increasedIngredient] = this.updatedIngredients[increasedIngredient] - 1
        this.setState({ ingredients: this.updatedIngredients })
        this.updateAmount(this.updatedIngredients)
    }
    updateAmount = (updatedIngredients) => {
        let totalAmount = 0;
        let updatedIngredientsArray = Object.keys(updatedIngredients)
        for (let i = 0; i < updatedIngredientsArray.length; i++) {
            totalAmount = totalAmount + updatedIngredients[updatedIngredientsArray[i]] * Object.values(this.cost)[i]
        }
        this.setState({ amount: totalAmount })
    }
    orderClicked = () => {
        let checkoutCopy = this.state.checkout
        this.setState({ checkout: !checkoutCopy })
    }

    render() {
        return (
            <Aux >
                {/* {(this.state.checkout) ? <Backdrop /> : null} */}


                <div className={classes.controls}>
                    <Buildcontrols
                        ingredients={this.state.ingredients}
                        amount={this.state.amount}
                        isCheckout={this.state.checkout}
                        cost={this.cost}
                        checkout={() => this.orderClicked()}
                        addIngredient={(event) => this.addIngredient(event)}
                        subIngredient={(event) => this.subIngredient(event)}
                    />
                </div>
                <Burger
                    type={this.type}
                    count={this.count}
                    ingredients={this.state.ingredients}

                />
            </Aux>
        );
    }
}
export default Burgerbuilder;