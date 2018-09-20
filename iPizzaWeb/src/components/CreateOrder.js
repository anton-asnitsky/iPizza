import React from 'react';
import { connect }      from 'react-redux';
import { startMakeOrder } from '../actions/order';
import { OrderStatus, PizzaType, ToppingType } from '../enums/order';

import '../styles/create-order-page.scss';

class CreateOrder extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            customerId: props.users.userId,
            pizzaType: PizzaType.NONE,
            toppingType: ToppingType.NONE,
            status: OrderStatus.NEW,
            userLoggedIn: props.users.loggedIn,
            error: !props.users.loggedIn ? 'First you need to login' : ''
       }
    };

    onPizzaTypeChange = (e) => {
        const pizzaType = parseInt(e.target.value);
        this.setState(() => ({ pizzaType }));
    };

    onToppingsChange = (e) => {
        const toppingType = parseInt(e.target.value);
        this.setState(() => ({ toppingType }));
    };

    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.userLoggedIn){
            this.setState(() => ({
                error: 'First you need to login'
            }));
            return;
        }

        if(this.state.pizzaType === PizzaType.NONE) {
            this.setState(() => ({
                error: 'Please choose pizza type'
            }));
            return;
        } 
        
        if(this.state.toppingType === ToppingType.NONE) {
            this.setState(() => ({
                error: 'Please choose pizza type'
            }));
            return;
        }
        this.setState(() => ({
            error: ''
        }));
        
        this.props.startMakeOrder({
            customerId:  this.state.customerId,
            pizzaType: this.state.pizzaType,
            toppingType: this.state.toppingType,
            status: this.state.status,
        });
        this.props.history.push('/');
    };

   render(){
       return (
           <section className="create-order-widget">
               {this.state.error !== '' && <p className="error">{this.state.error}</p>}
               <form 
                className="order-form"
                onSubmit={this.onSubmit}>
                   <select
                    className="pizza-type"
                    onChange={this.onPizzaTypeChange}
                   >
                    <option value={ PizzaType.NONE }>Select pizza type</option>
                    <option value={ PizzaType.THICK }>Thick crust</option>
                    <option value={ PizzaType.THIN }>Thin crust</option>
                    <option value={ PizzaType.WHOLE }>Whole wheat flour</option>
                   </select>
                   <select
                    className="topping-type"
                    onChange={this.onToppingsChange}
                   >
                    <option value={ ToppingType.NONE }>Choose toppings</option>
                    <option value={ ToppingType.OLIVES }>Olives</option>
                    <option value={ ToppingType.CHEESE }>Cheese</option>
                    <option value={ ToppingType.MUSHROOMS }>Mushrooms</option>
                    <option value={ ToppingType.ANCHOVY }>Anchovy</option>
                    <option value={ ToppingType.TUNA }>Tuna</option>
                    <option value={ ToppingType.CORN }>Corn</option>
                    <option value={ ToppingType.SOUCE }>Souce</option>
                    <option value={ ToppingType.PEPPER }>Hot pepper</option>
                   </select>
                   <button
                    className="button"
                   >
                        Make an order
                    </button>
               </form>
           </section>
       );
   };
}

const mapStateToPorps = (state) => {
    return {
        orders: state.orders,
        users: state.users
    };
};

const mapDispatchToProps = (dispatch) => ({
    startMakeOrder: (order) => dispatch(startMakeOrder(order))
});

export default connect(mapStateToPorps, mapDispatchToProps)(CreateOrder);