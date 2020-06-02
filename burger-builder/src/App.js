import React, { Component } from 'react';
import Aux from './components/Aux/Aux'
import classes from './css-modules/App.module.css'
import Navigation from './components/Navigation/Navigation';
import Layout from './components/Layout/Layout'
import logoSvg from './Assets/Images/logo.svg'

class App extends Component {
  state = {
    clicked: false
  }
  menu = null
  showMenu = () => {
    let sidebar = '';
    if (!this.state.clicked) {
      sidebar = [classes.showMenu, classes.menu]
    }
    else {
      sidebar = [classes.hideMenu, classes.menu]
    }
    this.menu = (
      <div className={sidebar.join(" ")}>
        <div>My orders</div>
        <div>Register</div>
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
        <Layout />
      </div>
    );
  }
}

export default App;
