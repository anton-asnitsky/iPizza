import React                from 'react';
import { Link }             from 'react-router-dom';

import '../styles/page-not-found.scss';

const NotFoundPage = () => (
    <section className="page-not-found-widget">
        404 Page ypu've requested was not found- <Link to="/">Go home</Link>
    </section>
);

export default NotFoundPage;