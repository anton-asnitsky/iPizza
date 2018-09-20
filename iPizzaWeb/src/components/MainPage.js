import React from 'react';
import OrdersList from './OrdersList';

import '../styles/main-page.scss';

const MainPage = (props) => (
    <section className="main-content">
        <OrdersList history={props.history} />
    </section>
);

export default MainPage;