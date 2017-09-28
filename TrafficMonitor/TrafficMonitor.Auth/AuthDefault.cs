using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TrafficMonitor.Auth
{
    public struct AuthDefault
    {
        public const int MinUsernameLength = 3;
        public const int MinPasswordLength = 3;

        public const int MaxUsernameLength = 256;
        public const int MaxPasswordLength = 1024;
    }
}
