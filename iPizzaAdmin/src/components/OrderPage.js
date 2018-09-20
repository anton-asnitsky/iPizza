import React from 'react';
import { connect } from 'react-redux';
import { startUpdateOrderStatus } from '../actions/order';
import {StatusTypes, ToppingTypes, PizzaTypes} from '../enums/order';

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
            <section>
                <p>Type: {PizzaTypes[this.state.pizzaType]}</p>
                <p>Topping: {ToppingTypes[this.state.toppingType]}</p>
                <p>Current status: 
                    <select
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