using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace iPizzaRestApi.Models {
    public class Order {
        [Key]
        public int id { get; set; }
        public string customerId { get; set; }
        public int pizzaType { get; set; }
        public int toppingType { get; set; }
        public int status { get; set; }
    }
}
