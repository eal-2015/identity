using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using TrafficMonitor.Auth.Models;
using TrafficMonitor.Auth.Data;
using IdentityServer4.Services;
using IdentityModel.Client;
using Microsoft.AspNetCore.Authentication;
using Microsoft.EntityFrameworkCore;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TrafficMonitor.Auth.Controllers
{
    public abstract class ContextBaseController : Controller
    {
        protected ApplicationDbContext Database { get; set; }

        public ContextBaseController(ApplicationDbContext db)
        {
            Database = db;
        }
    }

    public abstract class SignBaseController : Controller
    {
        protected SignInManager<ApplicationUser> SignInHelper { get; }

        public SignBaseController(SignInManager<ApplicationUser> signInManager)
        {
            SignInHelper = signInManager;
        }
    }

    public abstract class UserBaseController : Controller
    {
        protected SignInManager<ApplicationUser> SignInHelper { get; }
        protected UserManager<ApplicationUser> UserHelper { get; }

        public UserBaseController(SignInManager<ApplicationUser> signInManager, UserManager<ApplicationUser> userManager)
        {
            SignInHelper = signInManager;
            UserHelper = userManager;
        }
    }
    
    public abstract class BaseController: Controller
    {
        protected SignInManager<ApplicationUser> SignInHelper { get; }
        protected UserManager<ApplicationUser> UserHelper { get; }
        protected ApplicationDbContext Database { get; }

        public BaseController(SignInManager<ApplicationUser> signInManager, UserManager<ApplicationUser> userManager, ApplicationDbContext db)
        {
            SignInHelper = signInManager;
            UserHelper = userManager;
            Database = db;
        }
    }

    public abstract class FullBaseController : Controller
    {
        protected SignInManager<ApplicationUser> SignInHelper { get; }
        protected UserManager<ApplicationUser> UserHelper { get; }
        protected ApplicationDbContext Database { get; }
        protected IIdentityServerInteractionService Interaction { get; }

        public FullBaseController(SignInManager<ApplicationUser> signInManager, UserManager<ApplicationUser> userManager, ApplicationDbContext db, IIdentityServerInteractionService interaction)
        {
            SignInHelper = signInManager;
            UserHelper = userManager;
            Database = db;
            Interaction = interaction;
        }

        public async Task<string> GetTokenAsync()
        {
            try
            {
                string token = null;
                if (User.Identity.IsAuthenticated)
                {
                    token = await HttpContext.Authentication.GetTokenAsync("access_token");
                }

                if(token == null)
                {
                    var url = string.Format("{0}://{1}", Request.Scheme, Request.Host.ToString());
                    var client = new DiscoveryClient(url);
                    var disc = await client.GetAsync();
                    var tokenClient = new TokenClient(disc.TokenEndpoint, "mvc", "secret");
                    var tokenResponse = await tokenClient.RequestClientCredentialsAsync("api1");
                    token = tokenResponse.AccessToken;
                }

                return token;
            }
            catch
            {}
            return null;
        }

        public async Task<UserIdentity> GetUserIdentityAsync()
        {
            try
            {
                if (User.Identity.IsAuthenticated)
                {
                    var token = await GetTokenAsync();
                    if (token != null)
                    {
                        var id = UserHelper.GetUserId(User);
                        if (id != null)
                        {
                            var profile = await Database.Profiles.FirstOrDefaultAsync(x => id.Equals(x.Id));
                            if (profile != null)
                            {
                                return profile.ToIdentity(token);
                            }
                        }
                    }
                }
            }
            catch
            {}

            return null;
        }
    }
}
