using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IdentityServer4.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using TrafficMonitor.Auth.Data;
using TrafficMonitor.Auth.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TrafficMonitor.Auth.Controllers
{
    [Route("[controller]")]
    public class LogoutController : SignBaseController
    {
        public LogoutController(SignInManager<ApplicationUser> signInManager) : base(signInManager)
        {
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            if (User.Identity.IsAuthenticated)
            {
                await SignInHelper.SignOutAsync();
                return Json(1);
            }

            return Json(0);
        }
    }
}
