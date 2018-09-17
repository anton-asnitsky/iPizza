import React from 'react';
import { connect }      from 'react-redux';
import OrdersListItem from './OrdersListItem';

const OrdersList = (props) => (
    <section>
        <h2>Current orders list</h2>
        <ul>
            {
                props.orders.length === 0 ? (
                    <li>No orders found</li>
                ) : (
                    props.orders.map((order) => {
                        return (<OrdersListItem key={order.id} {...order} />);
                    })
                )
            }
        </ul>
    </section>
);

const mapStateToPorps = (state) => {
    return {
        orders: state.orders
    };
};
export default connect(mapStateToPorps)(OrdersList);