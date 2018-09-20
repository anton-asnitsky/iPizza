import React from 'react';
import { connect }      from 'react-redux';
import OrdersListItem from './OrdersListItem';
import { apiServerUrl } from '../config/config';
import { updateOrdersList } from '../actions/order';
import axios from 'axios';

/**
 * Stateful component to present list of orders
 */
class OrdersList extends React.Component{
    constructor(props){
        super(props);

        /**
         * Stores local interval for refreshing list of orders
         */
        this.interval = window.setInterval(this.refreshOrdersList, 10000);

        /**
         * Local compnent stste
         */
        this.state = {
            orders: props.orders
        };
    };

    /**
     * Asyncronously refreshes orders list from DB
     */
    refreshOrdersList = () => {
        console.log('refreshing orders list');
        axios({
            method: 'get',
            url: `${apiServerUrl}/api/orders`,
        }).then((response) => {
            this.props.updateOrdersList(response.data);
            this.setState({
                orders: response.data
            });
        });
    };

    /**
     * Hooks buils in React component lifesycle method componentWillUnmount
     */
    componentWillUnmount(){
        window.clearInterval(this.interval);
        this.interval = null;
    };

    render(){
        return (
            <section>
                <h2>Current orders list</h2>
                <ul>
                    {
                        this.state.orders.length === 0 ? (
                            <li>No orders found</li>
                        ) : (
                            this.state.orders.map((order) => {
                                return (<OrdersListItem key={order.id} {...order} />);
                            })
                        )
                    }
                </ul>
            </section>
        );
    };
}

/**
 * Maps redux state to props of component
 * @param {*} state 
 */
const mapStateToPorps = (state) => {
    return {
        orders: state.orders
    };
};

/**
 * Maps redux dispatch function to props pf components
 * @param {*} dispatch 
 */
const mapDispatchToProps = (dispatch) => ({
    updateOrdersList: (orders = []) => dispatch(updateOrdersList(orders))
});

export default connect(mapStateToPorps, mapDispatchToProps)(OrdersList);