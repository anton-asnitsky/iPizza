using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using iPizzaRestApi.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace iPizzaRestApi.Controllers {
    /// <summary>
    /// OrderController class
    /// Contains all REST CRUD methods
    /// </summary>
    [Route( "api/orders" )]
    public class OrdersController :Controller {
        private OrderContext _context;

        /// <summary>
        /// Class constructor
        /// Inited with database context
        /// </summary>
        /// <param name="context"></param>
        public OrdersController( OrderContext context ) {
            _context = context;
        }

        /// <summary>
        /// GetAll method
        /// Used to get all existing order form db context
        /// Use GET /api/orders route
        /// </summary>
        /// <returns>Listof orders</returns>
        [HttpGet]
        public ActionResult<List<Order>> GetAll() {
            return _context.Orders.ToList();
        }

        /// <summary>
        /// GetById method
        /// Used to get particular order by it's id
        /// Use GET /orders/{orderId} route
        /// </summary>
        /// <param name="id"></param>
        /// <returns>Paerticular order or throws NotFound exception of no prders found.</returns>
        [HttpGet( "{id}", Name = "GetOrder" )]
        public ActionResult<Order> GetById( long id ) {
            var item = _context.Orders.Find( id );
            if ( item == null ) {
                return NotFound();
            }
            return item;
        }

        /// <summary>
        /// Create method
        /// Used to create new order
        /// Use POST /api/orders route with Order class serialized to JSON
        /// </summary>
        /// <param name="order"></param>
        /// <returns>Redirect to /api/order/{newly created order id} route</returns>
        [HttpPost]
        public IActionResult Create( Order order ) {
            _context.Orders.Add( order );
            _context.SaveChanges();

            return CreatedAtRoute( "GetOrder", new { id = order.Id }, order );
        }

        /// <summary>
        /// Update method
        /// Used to change given order;s current status
        /// Use PUT /api/orders/{orderId} route with Order class serialized to JSON
        /// </summary>
        /// <param name="id"></param>
        /// <param name="update"></param>
        /// <returns>No content returned</returns>
        [HttpPut( "{id}" )]
        public IActionResult Update( long id, Order update ) {
            var order = _context.Orders.Find( id );
            if ( order == null ) {
                return NotFound();
            }

            order.Status = update.Status;

            _context.Orders.Update( order );
            _context.SaveChanges();
            return NoContent();
        }

        /// <summary>
        /// Delkete method
        /// Used to set given order as shipped and closed
        /// Use DELETE /api/orders/{orderId} route
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete( "{id}" )]
        public IActionResult Delete( long id ) {
            var order = _context.Orders.Find( id );
            if ( order == null ) {
                return NotFound();
            }

            order.Status = 0;
            _context.Orders.Update( order );
            _context.SaveChanges();
            return NoContent();
        }
    }
}
