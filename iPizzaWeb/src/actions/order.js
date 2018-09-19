import axios from 'axios';

/**
 * Action generator for new order creation
 * @param {*} order 
 */
export const makeOrder = (order) => ({
    type: MAKE_ORDER,
    order
});

/**
 * Async method that starts data pushing to  api and if success updates redux store
 * @param {*} orderData 
 */
export const startMakeOrder = (orderData = {}) => {
    return (dispatch) => {
      const {
        CustomerId = 0,
        PizzaType = 0,
        ToppingType = 0,
        Status = 1
      } = orderData;
      const order = {  CustomerId, PizzaType, ToppingType, Status };
  
      axios({
        method: 'post',
        url: 'http://localhost:8080/api/orders',
        data: order
      }).then((response) => {
          dispatch(makeOrder({Id, CustomerId, PizzaType, ToppingType, Status}));
      });
    };
  };


/**
 * Actrion generator for order updating
 * @param {*} id 
 * @param {*} updates 
 */
export const updateOrderStatus = (id, updates) => ({
    type: 'UPDATE_ORDER_STATUS',
    id, 
    updates
});

/**
 * Async method that starts order update and if suxxess updates redux store
 * @param {*} orderData 
 */
export const startUpdateOrderStatus = (orderData = {}) => {
    return (dispatch) => {
      const {
        Id,
        CustomerId = 0,
        PizzaType = 0,
        ToppingType = 0,
        Status = 1
      } = orderData;
      const order = {  Id, CustomerId, PizzaType, ToppingType, Status };
  
      axios({
        method: 'update',
        url: `http://localhost:8080/api/orders/${order.Id}`,
        data: order
      }).then((response) => {
          dispatch(updateOrderStatus({Id, order}));
      });
    };
  };

/**
 * Action generator for closing order
 * @param {*} id 
 */
export const closeOrder = (id) => ({
    type: 'CLOSE_ORDER',
    id
});

/**
 * Async method that stars order cosing and if success updates redux sotre
 * @param {*} id 
 */
export const startCloseOrder = (id) => {
    return (dispatch) => {
 
      axios({
        method: 'delete',
        url: `http://localhost:8080/api/orders/${id}`,
        data: order
      }).then((response) => {
          dispatch(closeOrder(id));
      });
    };
  };