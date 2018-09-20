import { apiServerUrl } from '../config/config';
import axios from 'axios';

/**
 * Action generator for orders list updating
 * @param {*} orders 
 */
export const updateOrdersList = (orders = []) => ({
    type: 'UPDATE_ORDERS_LIST',
    orders
});

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
  
      console.log(order);
      axios({
        method: 'put',
        url: `${apiServerUrl}/api/orders/${order.id}`,
        data: order
      }).then((response) => {
          dispatch(updateOrderStatus({id, order}));
      });
    };
  };