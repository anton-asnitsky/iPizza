import React from 'react';
import OrdersList from './OrdersList';

const MainPage = (props) => (
    <section>
        <OrdersList history={props.history} />
    </section>
);

export default MainPage;