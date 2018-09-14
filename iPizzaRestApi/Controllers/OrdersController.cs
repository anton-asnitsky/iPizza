using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using iPizzaRestApi.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace iPizzaRestApi.Controllers {
    [Route( "api/orders" )]
    public class OrdersController :Controller {
        private OrderContext _context;

        public OrdersController( OrderContext context ) {
            _context = context;
        }

        [HttpGet]
        public ActionResult<List<Order>> GetAll() {
            return _context.Orders.ToList();
        }

        [HttpGet( "{id}", Name = "GetOrder" )]
        public ActionResult<Order> GetById( long id ) {
            var item = _context.Orders.Find( id );
            if ( item == null ) {
                return NotFound();
            }
            return item;
        }

        [HttpPost]
        public IActionResult Create( Order item ) {
            _context.Orders.Add( item );
            _context.SaveChanges();

            return CreatedAtRoute( "GetOrder", new { id = item.Id }, item );
        }
    }
}
