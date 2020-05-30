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
    console.log(classes.showMenu)
    if (!this.state.clicked) {
      this.menu = (<div className={classes.showMenu}>
        <div>
          <img
            src={logoSvg}
            alt='ALTlogo'
            className='logo'

          ></img>
        </div>
        <div>My orders</div>
        <div>Register</div>
      </div>)
    } else {
      this.menu = (<div className={classes.hideMenu}>
        <div>
          <img
            src={logoSvg}
            alt='ALTlogo'
            className='logo'

          ></img>
        </div>
        <div>My orders</div>
        <div>Register</div>
      </div>);
    }
    this.setState((prevState) => {
      return { clicked: !prevState.clicked }
    })
  }

  // componentDidMount() {    this.connecToServer();  }

  render() {
    return (
      <Aux>
        {this.menu}
        <Navigation
          clicked={() => this.showMenu()}
        />
        <Layout />
      </Aux>
    );
  }
}

export default App;
