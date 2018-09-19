import React from 'react';
import { connect }      from 'react-redux';
import { startMakeOrder } from '../actions/order';
import { OrderStatus, PizzaType, ToppingType } from '../enums/order';

class CreateOrder extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            CustomerId: props.users.userId,
            PizzaType: PizzaType.NONE,
            ToppingType: ToppingType.NONE,
            Status: OrderStatus.NEW,
            userLoggedIn: props.users.loggedIn,
            error: !props.users.loggedIn ? 'First you need to login' : ''
       }
    };

    onPizzaTypeChange = (e) => {
        const PizzaType = parseInt(e.target.value);
        this.setState(() => ({ PizzaType }));
    };

    onToppingsChange = (e) => {
        const ToppingType = parseInt(e.target.value);
        this.setState(() => ({ ToppingType }));
    };

    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.userLoggedIn){
            this.setState(() => ({
                error: 'First you need to login'
            }));
            return;
        }

        if(this.state.PizzaType === PizzaType.NONE) {
            this.setState(() => ({
                error: 'Please choose pizza type'
            }));
            return;
        } 
        
        if(this.state.ToppingType === ToppingType.NONE) {
            this.setState(() => ({
                error: 'Please choose pizza type'
            }));
            return;
        }
        this.setState(() => ({
            error: ''
        }));
        
        this.props.startMakeOrder({
            CustomerId:  this.state.userId,
            PizzaType: this.state.PizzaType,
            ToppingType: this.state.ToppingType,
            Status: this.state.Status,
        });
        this.props.history.push('/');
    };

   render(){
       return (
           <section>
               {this.state.error !== '' && <p>{this.state.error}</p>}
               <form onSubmit={this.onSubmit}>
                   <select
                    onChange={this.onPizzaTypeChange}
                   >
                    <option value={ PizzaType.NONE }>Select pizza type</option>
                    <option value={ PizzaType.THICK }>Thick crust</option>
                    <option value={ PizzaType.THIN }>Thin crust</option>
                    <option value={ PizzaType.WHOLE }>Whole wheat flour</option>
                   </select>
                   <select
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
                   <button>Make an order</button>
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