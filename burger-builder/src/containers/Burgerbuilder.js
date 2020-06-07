import {baseURL} from '../environment'
import React, { PureComponent } from 'react';
import Aux from '../components/Aux/Aux'
import Burger from '../components/Burger/Burger'
import Buildcontrols from '../components/Buildcontrols/Buildcontrols';
import classes from '../css-modules/Burgerbuilder.module.css'
// import Backdrop from '../components/Backdrop/Backdrop'
import { withRouter } from 'react-router-dom'
import Spinner from '../components/Spinner/Spinner';
const axios = require('axios');
// import { urlencoded } from 'express';


class Burgerbuilder extends PureComponent {

    state = null;
    cost = null;
    updatedIngredients = null;
    count;
    type;

    async componentDidMount() {
        try {
            console.log('CDM base = ',baseURL)
            let res = await axios({
                url: 'getIngredientDetails',
                baseURL: baseURL
                // baseURL: process.env.SRV_URL || ('http://localhost:4000')
            })
            let formatIngredients = {}
            let formatCost = {}
            for (let i in res.data) {
                formatIngredients[res.data[i].ingredientName] = 0;
                formatCost[res.data[i].ingredientName] = res.data[i].cost
            }
            this.cost = formatCost;
            this.setState({ ingredients: formatIngredients });
            this.setState({ amount: 0 })
        }
        catch (err) {
            console.log(err)
        }
    }

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
        let decreasedIngredient = Object.keys(this.updatedIngredients)[index]
        this.updatedIngredients[decreasedIngredient] = this.updatedIngredients[decreasedIngredient] - 1
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

    confirmOrder = async () => {
        await this.postOrder();
        this.routeToOrderSummary();
    }

    async postOrder() {
        try {
            let body = {
                ingredients: this.state.ingredients,
                amount: this.state.amount
            };
            await axios({
                url: '/confirm',
                method: 'post',
                data: body,
                baseURL: baseURL
            });
        }
        catch (err) {
            console.log(err);
        }
    }

    routeToOrderSummary() {
        let searchParams = { ...this.state.ingredients };
        let query = '?';
        let key;
        let value;
        for (let i in Object.keys(searchParams)) {
            key = Object.keys(searchParams)[i];
            value = Object.values(searchParams)[i];
            query += encodeURIComponent(key) + '=' + encodeURIComponent(value) + '&';
        }
        this.props.history.push('/orderSummary' + query + 'amount=' + encodeURIComponent(this.state.amount));
    }

    render() {
        return (
            <Aux >
                {(this.state) ?
                    <Aux>
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
                    : <Spinner />}
            </Aux>
        );
    }
}
export default withRouter(Burgerbuilder);