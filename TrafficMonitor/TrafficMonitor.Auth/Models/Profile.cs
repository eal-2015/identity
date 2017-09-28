using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TrafficMonitor.Auth.Models
{
    public class Profile
    {
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Department { get; set; }
        public string Occupation { get; set; }

        public UserIdentity ToIdentity(string token = null)
        {
            return new UserIdentity
            {
                FirstName = FirstName,
                LastName = LastName,
                Department = Department,
                Occupation = Occupation,
                Token = token
            };
        }
    }
}
