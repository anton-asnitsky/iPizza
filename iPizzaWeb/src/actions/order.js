export const makeOrder = (order) => ({
    type: MAKE_ORDER,
    order
});

export const updateOrderStatus = (id, updates) => ({
    type: 'UPDATE_ORDER_STATUS',
    id, 
    updates
});

export const closeOrder = (id) => ({
    type: 'CLOSE_ORDER',
    id
});