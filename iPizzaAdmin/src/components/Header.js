import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/header.scss';

const Header = () => (
    <header className="main-header">
        <h1 className="title">iPizza Admin</h1>
        <nav  className="nav-container">
            <NavLink to="/" activeClassName="is-active" exact={true}>Main page</NavLink>
        </nav>
    </header>
);

export default Header;