using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using TrafficMonitor.Auth.Data;
using TrafficMonitor.Auth.Models;
using TrafficMonitor.Auth.Services;
using System.Reflection;

namespace TrafficMonitor.Auth
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);

            if (env.IsDevelopment())
            {
                // For more details on using the user secret store see https://go.microsoft.com/fwlink/?LinkID=532709
                builder.AddUserSecrets<Startup>();
            }

            builder.AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("default", p =>
                {
                    p.AllowAnyOrigin();
                    p.AllowAnyMethod();
                    p.AllowAnyHeader();
                    p.AllowCredentials();
                });
            });

            // Add framework services.
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

            services.AddIdentity<ApplicationUser, IdentityRole>(x =>
            {
                x.Cookies.ApplicationCookie.CookieName = "aid";
                x.Cookies.ApplicationCookie.CookieDomain = "localhost";
                x.Password.RequireDigit = false;
                x.Password.RequiredLength = 3;
                x.Password.RequireLowercase = false;
                x.Password.RequireUppercase = false;
                x.Password.RequireNonAlphanumeric = false;
            })
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();


            services.AddMvc();

            // Add application services.
            services.AddTransient<IEmailSender, AuthMessageSender>();
            services.AddTransient<ISmsSender, AuthMessageSender>();

            //This is necessary to target DbContexts not located in your hosting project - In this case, a nuget package
            var migrationsAssembly = typeof(Startup).GetTypeInfo().Assembly.GetName().Name;

            // Adds IdentityServer
            services.AddIdentityServer()

                .AddTemporarySigningCredential()
                //Test From inmemory configuration
                .AddInMemoryIdentityResources(InMemConfig.GetIdentityResources())
                .AddInMemoryApiResources(InMemConfig.GetApiResources())
                .AddInMemoryClients(InMemConfig.GetClients())
                .AddTestUsers(InMemConfig.GetUsers())
                //Sql Identity DB
                .AddAspNetIdentity<ApplicationUser>()
                //Sql Persisted Grant Store - Saves consent
                .AddOperationalStore(builder =>
                    builder.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"),
                    options => options.MigrationsAssembly(migrationsAssembly)))
                //Sql Scope and Clients
                .AddConfigurationStore(builder =>
                 builder.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"),
                 options => options.MigrationsAssembly(migrationsAssembly)));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
                app.UseBrowserLink();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseCors("default");

            app.UseStaticFiles();

            app.UseIdentity();

            app.UseIdentityServer();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
