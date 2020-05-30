import React from 'react';
import Aux from '../Aux/Aux'
import Burger from '../Burger/Burger'
import Buildcontrols from '../Buildcontrols/Buildcontrols';
import Burgerbuilder from '../../containers/Burgerbuilder';

const Layout = () => {
    return (
        <Aux>
           <Burgerbuilder/>
        </Aux>
    )
}
export default Layout;