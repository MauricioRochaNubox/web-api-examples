var client = new RestClient("https://api.nubox.com/Nubox.API/factura/documento/1-9/estadocompra/0/FAC/1/2-7");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
request.AddHeader("token", "ab016ed6-1d8a-40c9-9eb8-418fbcb47c1a");
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);