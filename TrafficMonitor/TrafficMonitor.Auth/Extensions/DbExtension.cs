using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TrafficMonitor.Auth
{
    public static class DbExtension
    {
        public static IEnumerable<int> ToIntArray(this byte[] source)
        {
            if (source != null && source.Length % 4 == 0)
            {
                var data = new List<int>();
                var iteration = source.Length / 4;
                for (int i = 0; i < iteration; i++)
                {
                    data.Add(BitConverter.ToInt32(source, i * iteration));
                }

                return data;
            }
            return null;
        }

        public static byte[] ToByteArray(this IEnumerable<int> source)
        {
            if (source != null)
            {
                var data = new List<byte>();
                foreach (var item in source)
                {
                    data.AddRange(BitConverter.GetBytes(item));
                }

                return data.ToArray();
            }

            return null;
        }
    }
}
