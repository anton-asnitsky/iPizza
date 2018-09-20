import React from 'react';
import { connect }      from 'react-redux';
import OrdersListItem from './OrdersListItem';

import '../styles/orders-list.scss';

class OrdersList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            orders: props.orders
        };
    };

    render(){
        return(
            <section className="orders-list-widget">
                <h2 className="title">Current orders list</h2>
                <ul className="orders-list">
                    {
                        this.props.orders.length === 0 ? (
                            <li className="list-item">No orders found</li>
                        ) : (
                            this.props.orders.map((order) => {
                                return (
                                    <li className="list-item" key={order.id}>
                                        <OrdersListItem  {...order} history={this.props.history} />
                                    </li>
                                );
                            })
                        )
                    }
                </ul>
            </section>
        );
    };
}


const mapStateToPorps = (state) => {
    return {
        orders: state.orders
    };
};
export default connect(mapStateToPorps)(OrdersList);