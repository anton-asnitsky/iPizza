import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/header.scss';

const Header = () => (
    <header className="main-header">
        <h1 className="title">iPizza</h1>
        <nav className="nav-container">
            <NavLink to="/" activeClassName="is-active" exact={true}>Main page</NavLink>
            <NavLink to="/login" activeClassName="is-active" exact={true}>Login</NavLink>
            <NavLink to="/order" activeClassName="is-active" exact={true}>Order pizza</NavLink>
        </nav>
    </header>
);

export default Header;