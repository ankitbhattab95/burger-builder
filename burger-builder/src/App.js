import React, { Component } from 'react';
import classes from './css-modules/App.module.css'
import './components/Sidebar/Sidebar.css'
import Navigation from './components/Navigation/Navigation';
import Layout from './components/Layout/Layout'
import Orders from './components/Orders/Orders';
import OrderSummary from './components/OrderSummary/OrderSummary';
import { Switch, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import { readEnv } from './environment'
class App extends Component {

  constructor() {
    super()
    console.log('constructor----------------------')
    readEnv()
  }
  state = {
    clicked: false
  }

  menu = null

  sidebar = '';
  toggleMenu = () => {
    if (!this.state.clicked) {
      this.sidebar = ['showMenu', 'menu']
    }
    else {
      this.sidebar = ['hideMenu', 'menu']
    }
    this.menu = (
      <div className={this.sidebar.join(" ")}>
        <Sidebar />
      </div>
    )
    this.setState((prevState) => {
      return { clicked: !prevState.clicked }
    })
  }
  hideMenu = () => {
    if (this.sidebar.includes('showMenu')) {
      this.toggleMenu()
    }
  }


  render() {
    return (
      <React.Fragment>
        <Navigation
          showSidebar={() => this.toggleMenu()}
        />
        <div className={classes.container} onClick={() => this.hideMenu()} >
          {this.menu}
          <Switch>
            <Route path='/' exact render={(props) => <Layout hideMenu={() => this.toggleMenu()} />} />
            <Route path='/orders' component={Orders} />
            <Route path='/orderSummary' component={OrderSummary} />
            <Route render={() => <div style={{ marginTop: '80px' }}>No such route</div>} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
