import React from 'react'
import './Navigation.css'
import logoSvg from '../../Assets/Images/logo.svg'
const Navigation = (props) => {
    return (
        <div className='nav'>
            <div>
                <img
                    src={logoSvg}
                    alt='ALTlogo'
                    className='logo'

                ></img>
            </div >
            <div className='collapse'>My Orders</div>
            <div className='collapse'>Register</div>
            <div onClick={props.clicked}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>

        </div>


    )
}

export default Navigation;