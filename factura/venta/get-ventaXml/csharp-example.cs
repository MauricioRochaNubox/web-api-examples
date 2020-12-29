var client = new RestClient("https://api.nubox.com/Nubox.API/factura/documento/15478788-7/venta/2020-06-22/FAC-EL/9/1");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
request.AddHeader("token", "9df9b12c-c33a-42ab-bfae-1e4b3abb16cc");
request.AddHeader("Cookie", ".Stackify.Rum=f0af7579-7902-4bd2-b8e9-2fd72872bd71");
request.AddParameter("text/plain", "",  ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);