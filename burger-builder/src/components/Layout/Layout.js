import React from 'react';
import Aux from '../Aux/Aux'
import Burger from '../Burger/Burger'
import Buildcontrols from '../Buildcontrols/Buildcontrols';
import Burgerbuilder from '../../containers/Burgerbuilder';
import { PromiseProvider } from 'mongoose';

const Layout = () => {
    return (
        <React.Fragment>
            <Burgerbuilder />
        </React.Fragment>
    )
}
export default Layout;