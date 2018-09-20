import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import ordersReducer from '../reducers/ordersReducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            orders: ordersReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};
