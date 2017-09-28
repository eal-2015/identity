
using System.Collections.Generic;

namespace TrafficMonitor.Auth.Models
{
    public class Dashboard
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public string Name { get; set; }
        public DashboardType Type { get; set; }
        public byte[] Widgets { get; set; }
    }
}
