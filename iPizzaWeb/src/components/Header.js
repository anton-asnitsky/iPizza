import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>iPizza</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Main page</NavLink>
        <NavLink to="/login" activeClassName="is-active" exact={true}>Login</NavLink>
        <NavLink to="/order" activeClassName="is-active" exact={true}>Order pizza</NavLink>
    </header>
);

export default Header;