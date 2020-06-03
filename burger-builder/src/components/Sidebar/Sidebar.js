import React from 'react'
import {NavLink} from 'react-router-dom'
import './Sidebar.css'
const Sidebar = (props) => {
    return (
        <ul >
            <li><NavLink to='/' exact className='inactive' activeClassName="active">Home</NavLink></li>
            <li><NavLink to='/orders'className='inactive' activeClassName="active">My orders</NavLink></li>
            <li><NavLink to='/register' exact className="inactive" activeClassName="active">Register</NavLink></li>
        </ul>
    )
}

export default Sidebar;