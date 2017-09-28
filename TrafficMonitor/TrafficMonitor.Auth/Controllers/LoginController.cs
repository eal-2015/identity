using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TrafficMonitor.Auth.Models.AccountViewModels;
using Microsoft.AspNetCore.Identity;
using TrafficMonitor.Auth.Models;
using Microsoft.AspNetCore.Cors;
using System.Security.Claims;
using TrafficMonitor.Auth.Data;
using Microsoft.EntityFrameworkCore;
using IdentityServer4.Services;
using TrafficMonitor.Auth.Models.AccountModels;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TrafficMonitor.Auth.Controllers
{
    [Route("[controller]")]
    [EnableCors("default")]
    public class LoginController : FullBaseController
    {
        public LoginController(SignInManager<ApplicationUser> signInManager, UserManager<ApplicationUser> userManager, ApplicationDbContext db, IIdentityServerInteractionService interaction) : base(signInManager, userManager, db, interaction)
        {
        }

        public IActionResult Get()
        {
            return Json(new { status = 1, message = "Running" });
        }

        [HttpPost]
        public async Task<IActionResult> Post(UserLogin model)
        {
            if (ModelState.IsValid)
            {
                // Sign in user with password
                var result = await SignInHelper.PasswordSignInAsync(model.Username, model.Password, model.Remember, false);
                if (result.Succeeded)
                {
                    // Get user's ID
                    var user = await UserHelper.FindByNameAsync(model.Username);
                    var id = user.Id;

                    if (user != null)
                    {
                        // Get User's Profile
                        var profile = await Database.Profiles.FirstOrDefaultAsync(x => user.Id.Equals(x.Id));

                        if (profile != null)
                        {
                            var info = new UserIdentity
                            {
                                FirstName = profile.FirstName,
                                LastName = profile.LastName,
                                Department = profile.Department,
                                Occupation = profile.Occupation
                            };

                            info.Token = await GetTokenAsync();

                            return Json(info);
                        }
                    }
                }
            }

            return Json(null);
        }
    }
}
