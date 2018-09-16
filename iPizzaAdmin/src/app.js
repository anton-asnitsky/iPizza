import React                from 'react';
import ReactDOM             from 'react-dom';
import {Provider}           from 'react-redux';
import AppRouter            from './routers/AppRouter';   
import { setTextFilter }    from './actions/filters';
import { addExpense }       from './actions/expenses';
import configureStore       from './store/configure-store';

import './firebase/firebase';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));