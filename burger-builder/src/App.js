import React, { Component } from 'react';
import classes from './css-modules/App.module.css'
import './components/Sidebar/Sidebar.css'
import Navigation from './components/Navigation/Navigation';
import Layout from './components/Layout/Layout'
import Orders from './components/Orders/Orders';
import OrderSummary from './components/OrderSummary/OrderSummary';
import { Switch, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'

class App extends Component {

  state = {
    clicked: false
  }

  menu = null

  showMenu = () => {
    let sidebar = '';
    if (!this.state.clicked) {
      sidebar = ['showMenu', 'menu']
    }
    else {
      sidebar = ['hideMenu', 'menu']
    }
    this.menu = (
      <div className={sidebar.join(" ")}>
        <Sidebar/>
      </div>
    )
    this.setState((prevState) => {
      return { clicked: !prevState.clicked }
    })
  }


  render() {
    return (
      <div className={classes.container}>
        {this.menu}
        <Navigation
          showSidebar={() => this.showMenu()}
        />
        <Switch>
          <Route path='/' exact component={Layout} />
          <Route path='/orders' component={Orders} />
          <Route path='/orderSummary' component={OrderSummary} />
        </Switch>
      </div>
    );
  }
}

export default App;
