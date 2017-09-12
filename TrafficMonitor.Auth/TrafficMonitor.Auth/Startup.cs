using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using TrafficMonitor.Auth.Models;
using System.Reflection;
using Microsoft.EntityFrameworkCore;

namespace TrafficMonitor.Auth
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            const string connectionString =
                @"Data Source=(LocalDb)\MSSQLLocalDB;database=TrafficMonitor.Auth;trusted_connection=yes;";
            var migrationsAssembly = typeof(Startup).GetTypeInfo().Assembly.GetName().Name;

            services.AddIdentityServer()
                //Persisted grant store
            .AddOperationalStore(builder =>
                builder.UseSqlServer(connectionString, options => options.MigrationsAssembly(migrationsAssembly)))
                //client & scope store
            .AddConfigurationStore(builder =>
                builder.UseSqlServer(connectionString, options => options.MigrationsAssembly(migrationsAssembly)))
                
                
                //Testing in memory stores
            //.AddInMemoryClients(Clients.Get())
            //.AddInMemoryIdentityResources(Resources.GetIdentityResources())
            //.AddInMemoryApiResources(Resources.GetApiResources())
            .AddTestUsers(Users.Get())
            
            .AddTemporarySigningCredential();
            
            

            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseIdentityServer();
            app.UseStaticFiles();
            app.UseMvcWithDefaultRoute();
        }
    }
}
