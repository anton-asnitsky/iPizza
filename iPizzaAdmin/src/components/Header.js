import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>iPizza Admin</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Main page</NavLink>
    </header>
);

export default Header;