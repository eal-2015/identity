using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TrafficMonitor.Auth.Models
{
    public class UserIdentity
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Department { get; set; }
        public string Occupation { get; set; }
        public string Token { get; set; }
    }
}
