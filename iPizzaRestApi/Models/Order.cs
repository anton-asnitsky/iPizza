using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace iPizzaRestApi.Models {
    public class Order {
        [Key]
        public int Id { get; set; }
        public int CustomerId { get; set; }
        public int PizzaType { get; set; }
        public int ToppingType { get; set; }
        public int Status { get; set; }
    }
}
