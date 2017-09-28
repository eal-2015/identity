using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using TrafficMonitor.Auth.Models;
using TrafficMonitor.Auth.Data;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TrafficMonitor.Auth.Controllers
{
    [Route("[controller]")]
    public class DashboardController : ContextBaseController
    {
        public DashboardController(ApplicationDbContext db) : base(db)
        {
        }

        // GET: api/values
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var data = await Database.Dashboards.ToListAsync();
                return Json(data);
            }
            catch
            { }
            return Json(null);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            try
            {
                var data = await Database.Dashboards.FirstOrDefaultAsync(x => id == x.Id);
                return Json(data);
            }
            catch
            { }
            return Json(null);
        }

        // POST api/values
        [HttpPost]
        public void Post()
        {

        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
