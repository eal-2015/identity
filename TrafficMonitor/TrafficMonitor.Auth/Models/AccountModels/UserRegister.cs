using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TrafficMonitor.Auth.Models.AccountModels
{
    public class UserRegister
    {
        [Required]
        [StringLength(AuthDefault.MaxUsernameLength, MinimumLength = AuthDefault.MinUsernameLength)]
        public string Username { get; set; }

        [Required]
        [StringLength(AuthDefault.MaxPasswordLength, MinimumLength = AuthDefault.MinPasswordLength)]
        public string Password { get; set; }

        [Compare("Password")]
        public string ConfirmPassword { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        public string Department { get; set; }

        [Required]
        public string Occupation { get; set; }
    }
}
