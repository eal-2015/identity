using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TrafficMonitor.Auth.Models.AccountModels
{
    public class UserLogin
    {
        [Required]
        [StringLength(256, MinimumLength = 3)]
        public string Username { get; set; }
        [Required]
        [StringLength(1024, MinimumLength = 3)]
        public string Password { get; set; }

        public bool Remember { get; set; }
    }
}
