import axios from 'axios';
import { apiServerUrl } from '../config/config';



/**
 * Action generator for new order creation
 * @param {*} order 
 */
export const makeOrder = (order) => ({
    type: 'MAKE_ORDER',
    order
});

/**
 * Async method that starts data pushing to  api and if success updates redux store
 * @param {*} orderData 
 */
export const startMakeOrder = (orderData = {}) => {
    return (dispatch) => {
      const {
        customerId = 0,
        pizzaType = 0,
        toppingType = 0,
        status = 1
      } = orderData;
      const order = {  customerId, pizzaType, toppingType, status };
      axios({
        method: 'post',
        url: `${apiServerUrl}/api/orders`,
        data: order
      }).then((response) => {
          let order = {
            id: response.data.id, 
            customerId: response.data.customerId, 
            pizzaType: response.data.pizzaType, 
            toppingType: response.data.toppingType, 
            status: response.data.status
          };
          dispatch(makeOrder(order));
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
        id,
        customerId = 0,
        pizzaType = 0,
        toppingType = 0,
        status = 1
      } = orderData;
      const order = {  id, customerId, pizzaType, toppingType, status };
  
      axios({
        method: 'update',
        url: `${apiServerUrl}/api/orders/${order.Id}`,
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
        url: `${apiServerUrl}/api/orders/${id}`
      }).then((response) => {
          dispatch(closeOrder(id));
      });
    };
  };