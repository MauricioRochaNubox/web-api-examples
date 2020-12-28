var client = new RestClient("https://api.nubox.com/Nubox.API.cert/factura/documento/15478788-7/1/1/FAC-EL/pdf");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
request.AddHeader("token", "898e879d-ccba-40c4-898c-5d4a97f8ed9c");
request.AddHeader("Cookie", ".Stackify.Rum=f0af7579-7902-4bd2-b8e9-2fd72872bd71");
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);