var client = new RestClient("https://api.nubox.com/Nubox.API/factura/comunas");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
request.AddHeader("token", "8b47950f-42cf-4ecd-9a9c-4bbcc86a86d2");
request.AddHeader("Cookie", ".Stackify.Rum=4c648f24-1d4f-4817-a602-57005e5e24da");
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);