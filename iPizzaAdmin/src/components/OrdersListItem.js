import React from 'react';
import { NavLink } from 'react-router-dom';
import {StatusTypes, ToppingTypes, PizzaTypes} from '../enums/order';

const OrdersListItem = (props) => (
    <NavLink 
        to={`/order/${props.id}`} 
        activeClassName="is-active" 
        exact={true}>
        {`${StatusTypes[props.status]} ${PizzaTypes[props.pizzaType]} pizza with ${ToppingTypes[props.toppingType]}`}
    </NavLink>
);

export default OrdersListItem;