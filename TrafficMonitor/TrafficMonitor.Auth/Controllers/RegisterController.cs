using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using TrafficMonitor.Auth.Data;
using TrafficMonitor.Auth.Models;
using TrafficMonitor.Auth.Models.AccountModels;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TrafficMonitor.Auth.Controllers
{
    [Route("api/[controller]")]
    public class RegisterController: BaseController
    {
        public RegisterController(SignInManager<ApplicationUser> signInManager, UserManager<ApplicationUser> userManager, ApplicationDbContext db) : base(signInManager, userManager, db)
        {
        }

        [HttpPost]
        public async Task<IActionResult> Post(UserRegister model)
        {
            if (ModelState.IsValid && !User.Identity.IsAuthenticated)
            {
                // Create User
                var user = new ApplicationUser
                {
                    UserName = model.Username,
                    Email = model.Email
                };

                var createUser = await UserHelper.CreateAsync(user, model.Password);
                if (createUser.Succeeded && user.Id != null)
                {
                    var profile = new Profile
                    {
                        Id = user.Id,
                        FirstName = model.FirstName,
                        LastName = model.LastName,
                        Department = model.Department,
                        Occupation = model.Occupation
                    };

                    await Database.Profiles.AddAsync(profile);
                    var result = await Database.SaveChangesAsync();

                    if (result != 0)
                    {
                        return Json(1);
                    }
                }
            }

            return Json(0);
        }
    }
}
