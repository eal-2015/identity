using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TrafficMonitor.Auth.Models;
using Microsoft.AspNetCore.Identity;
using TrafficMonitor.Auth.Models.UserModels;
using Microsoft.AspNetCore.Cors;
using System.IO;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TrafficMonitor.Auth.Controllers
{
    [EnableCors("default")]
    [Route("[controller]")]
    public class LoginController : Controller
    {
        protected UserManager<ApplicationUser> UserHelper { get; set; }
        protected SignInManager<ApplicationUser> SignInHelper { get; set; }

        public LoginController(SignInManager<ApplicationUser> signInManager, UserManager<ApplicationUser> userManager)
        {
            UserHelper = userManager;
            SignInHelper = signInManager;
        }

        // GET: api/values
        [HttpGet]
        public object Get(UserLogin model)
        {
            return model;
        }

        // POST api/values
        [HttpPost]
        public async Task<object> Post(UserLogin model)
        {
            if (ModelState.IsValid)
            {
                var result = await SignInHelper.PasswordSignInAsync(model.Username, model.Password, model.Remember, false);
                if (result.Succeeded)
                {
                    // What are we going to do?
                    // CORS is biggest problem to handle, need to be the same origin
                    // or background cookies exchange between identity & client
                    return User.Claims.Select(x => new
                    {
                        x.Type,
                        x.Value
                    });
                }
            }

            return 0;
        }

        [HttpPost("[action]")]
        public object Test(UserLogin model)
        {
            return model;
        }
    }
}
