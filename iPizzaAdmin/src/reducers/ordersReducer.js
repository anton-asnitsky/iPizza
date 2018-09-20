const ordersReducerDefaultState = [];

export default (state = ordersReducerDefaultState, action) => {
    switch(action.type){
        case 'UPDATE_ORDER_STATUS':
            return state.map((order) => {
                if(order.id == action.id){
                    return {
                        ...order,
                        ...action.updates
                    };
                } 
                return order;
            });
        case 'UPDATE_ORDERS_LIST':
            return action.orders;
        default:
            return state;
    }
};