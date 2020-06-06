import React from 'react'
// import './Navigation.css'
import classes from './Navigation.css'
import logoSvg from '../../Assets/Images/logo.svg'
import menuIcon from '../../Assets/Images/menu.png'
import { NavLink } from 'react-router-dom'
const Navigation = (props) => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <NavLink to='/' className="navbar-brand" href="#">
                    <img src={logoSvg} alt="Buder builder"></img>
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    onClick={props.showSidebar} data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span><img src={menuIcon} alt='Menu'/></span>

                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedConten" >
                    <ul className="navbar-nav mr-auto ">
                        <li className="nav-item active">
                            <NavLink to='/' exact activeClassName="activeLink" className="nav-link inactive">
                                Home <span className="sr-only">(current)</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/orders' className="nav-link inactive"
                                activeClassName="activeLink">
                                My Orders
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/register' exact className="nav-link inactive"
                                activeClassName="activeLink">
                                Register
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/login' className="nav-link inactive"
                                activeClassName="activeLink">
                                Login
                            </NavLink>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#"
                                id="navbarDropdown" role="button" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                More
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">My orders</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li> */}

                    </ul>

                </div>
            </nav>
        </div>


    )
}

export default Navigation;