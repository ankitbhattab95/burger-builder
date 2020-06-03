import React, { PureComponent } from 'react';
import Aux from '../components/Aux/Aux'
import Burger from '../components/Burger/Burger'
import Buildcontrols from '../components/Buildcontrols/Buildcontrols';
import classes from '../css-modules/Burgerbuilder.module.css'
// import Backdrop from '../components/Backdrop/Backdrop'
import { withRouter } from 'react-router-dom'
// import { urlencoded } from 'express';


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
    type;

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
    confirmOrder = () => {
        // console.log('inside co ', this.state.ingredients)
        let searchParams = { ...this.state.ingredients };
        let query = '?';
        let key;
        let value;
        // console.log('b4--', query.toString())
        for (let i in Object.keys(searchParams)) {
            key = Object.keys(searchParams)[i]
            value = Object.values(searchParams)[i]
            query += encodeURIComponent(key) + '=' + encodeURIComponent(value) + '&'
        }
        
        console.log('search----', query)
        this.props.history.push('/orderSummary' + query)

    }

    render() {
        return (
            <Aux >
                <div className={classes.controls}>
                    <Buildcontrols
                        confirm={() => this.confirmOrder()}
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
export default withRouter(Burgerbuilder);