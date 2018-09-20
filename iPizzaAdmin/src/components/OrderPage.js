import React from 'react';
import { connect } from 'react-redux';
import { startUpdateOrderStatus } from '../actions/order';
import {StatusTypes, ToppingTypes, PizzaTypes} from '../enums/order';

import '../styles/order-page.scss';

class OrderPage extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            id: props.order.id, 
            customerId: props.order.customerId, 
            toppingType: props.order.toppingType, 
            pizzaType: props.order.pizzaType, 
            status: props.order.status
        };
    }

    createStatusOptionsList = () => {
        let optionsList = [];

        for(let index = 1; index < StatusTypes.length; index += 1){
            let jsx = (
                <option value={index} key={index}>
                    {StatusTypes[index]}
                </option>
            );
            optionsList.push(jsx);
        }

        return optionsList;
    };



    handleOrderStatusChange = (e) => {
        this.setState({
            status: e.target.value
        }, () => {
            this.props.startUpdateOrderStatus(this.state);
            this.props.history.push('/');
        });
    };

    render(){
        return (
            <section className="order-widget">
                <p className="caption">Type: <span className="data">{PizzaTypes[this.state.pizzaType]}</span></p>
                <p  className="caption">Topping: <span className="data">{ToppingTypes[this.state.toppingType]}</span></p>
                <p  className="caption"><span className="data">Current status: </span>
                    <select 
                        className="status-list"
                        value={this.state.status} 
                        onChange={this.handleOrderStatusChange}
                    >
                        {this.createStatusOptionsList()}
                    </select>
                </p>
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
        return order.id === parseInt(props.match.params.id);
    });

    return {
        order
    };
};

const mapDispatchToProps = (dispatch) => ({
    startUpdateOrderStatus: ({id,customerId,toppingType,pizzaType,status}) => dispatch(startUpdateOrderStatus({id,customerId,toppingType,pizzaType,status}))
});
export default connect(mapStateToPorps,mapDispatchToProps)(OrderPage);