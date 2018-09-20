import React from 'react';
import { connect } from 'react-redux';
import { OrderStatus } from '../enums/order';
import { startCloseOrder } from '../actions/order';
import { apiServerUrl } from '../config/config';


import axios from 'axios';

const PizzaTypes = [
    'None', 
    'Thick crust',
    'Thin crust',
    'Whole wheat flour'
];
const ToppingTypes = [
    'None',
    'Olives',
    'Cheese',
    'Mushrooms',
    'Anchovy',
    'Tuna',
    'Corn',
    'Souce',
    'Hot pepper'
];
const StatusTypes = [
    'Done',
    'New',
    'Prepearing',
    'Baking',
    'Boxing',
    'Delievering'
];


class OrdersListItem extends React.Component{
    constructor(props){
        super(props);

        this.interval = window.setInterval(this.checkOrderStatus, 10000);
        console.log(props);
        this.state = {
            id: props.order.id, 
            customerId: props.order.customerId, 
            toppingType: props.order.toppingType, 
            pizzaType: props.order.pizzaType, 
            status: props.order.status
        };
    }

    checkOrderStatus = () => {
        axios({
            method: 'get',
            url: `${apiServerUrl}/api/orders/${this.state.id}`
          }).then((response) => {
            this.setState(() => ({
                status: parseInt(response.data.status)
            }));
          });
    };

    onComponentWillUnmount(){
        window.clearInterval(this.interval);
        this.interval = null;
    };

    handleCloseOrder = (e) => {
        this.props.startCloseOrder(this.state.id);
        this.props.history.push('/');
    };

    render(){
        return (
            <section key={this.props.key}>
                <p>Type: {PizzaTypes[this.state.pizzaType]}</p>
                <p>Topping: {ToppingTypes[this.state.toppingType]}</p>
                <p>Current status: {StatusTypes[this.state.status]}</p>
                {
                    this.state.status === OrderStatus.DELIEVERING 
                    && 
                    <button
                        onClick={this.handleCloseOrder}
                    >
                        I've got the pizza
                    </button>
                }
            </section>
        );
    };
}

/**
 * Maps redux state to props of component
 * @param {*} state 
 */
const mapStateToPorps = (state, props) => {
    const order = state.orders.find((order) => {
        return order.id === props.id;
    });
    
    return {
        order
    };
};


const mapDispatchToProps = (dispatch) => ({
    startCloseOrder: (id) => dispatch(startCloseOrder(id))
});
export default connect(mapStateToPorps,mapDispatchToProps)(OrdersListItem);