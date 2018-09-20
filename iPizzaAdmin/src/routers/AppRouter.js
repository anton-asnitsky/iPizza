import React from 'react';
import Header from '../components/Header';
import MainPage from '../components/MainPage';
import OrderPage from '../components/OrderPage';
import NotFoundPage from '../components/NotFoundPage';

import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={MainPage} exact={true} />
                <Route path="/order/:id" component={OrderPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>

    </BrowserRouter>
);

export default AppRouter;