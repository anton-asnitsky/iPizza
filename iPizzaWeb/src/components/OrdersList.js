import React from 'react';
import { connect }      from 'react-redux';
import OrdersListItem from './OrdersListItem';

class OrdersList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            orders: props.orders
        };
    };

    render(){
        return(
            <section>
                <h2>Current orders list</h2>
                <ul>
                    {
                        this.props.orders.length === 0 ? (
                            <li>No orders found</li>
                        ) : (
                            this.props.orders.map((order) => {
                                return (<OrdersListItem key={order.id} {...order} history={this.props.history} />);
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