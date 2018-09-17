const ordersReducerDefaultState = [];

export default (state = ordersReducerDefaultState, action) => {
    switch(action.type){
        case 'MAKE_ORDER':
            return [...state, action.order];
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
        case 'CLOSE_ORDER':
            return state.filter(({ id }) => id !== action.id);
        default:
            return state;
    }
};