using System;
using Newtonsoft.Json;

namespace Company.Function
{

    public class Counter
    {
        [JsonProperty(PropertyName="id")]

        public String Id {get; set;}

        [JsonProperty(PropertyName = "count")]

        public int Count {get; set;}
    }
}