using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using TrafficMonitor.Auth.Data;
using TrafficMonitor.Auth.Models;
using Microsoft.AspNetCore.Authorization;
using IdentityServer4.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TrafficMonitor.Auth.Controllers
{
    [Authorize]
    [Route("[controller]")]
    public class UserController : FullBaseController
    {
        public UserController(SignInManager<ApplicationUser> signInManager, UserManager<ApplicationUser> userManager, ApplicationDbContext db, IIdentityServerInteractionService interaction) : base(signInManager, userManager, db, interaction)
        {
        }

        #region Utilities actions

        [AllowAnonymous]
        [HttpGet("[action]")]
        public bool Validate()
        {
            return User.Identity.IsAuthenticated;
        }

        [AllowAnonymous]
        [HttpGet("[action]")]
        public async Task<UserIdentity> Profile()
        {
            return await GetUserIdentityAsync();
        }
        
        public string Token()
        {
            return null;
        }

        #endregion



        #region REST actions

        [HttpGet("{init}")]
        [Authorize]
        public string Get(string init)
        {
            return init;
        }

        [HttpPost]
        [Authorize(Roles = "Manager")]
        public void Post([FromBody]string value)
        {
        }

        [HttpPut]
        [Authorize(Roles = "Manager")]
        public void Put(int id, [FromBody]string value)
        {
        }

        [HttpDelete]
        [Authorize(Roles = "Manager")]
        public void Delete(int id)
        {
        }

        #endregion
    }
}
