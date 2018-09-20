import React                from 'react';
import { Link }             from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        404 Page ypu've requested was not found- <Link to="/">Go home</Link>
    </div>
);

export default NotFoundPage;