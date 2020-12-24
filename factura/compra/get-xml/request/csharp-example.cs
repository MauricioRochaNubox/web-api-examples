var client = new RestClient("https://api.nubox.com/Nubox.API/factura/documento/1-6/compra/2020-06-17/FAC-EL/0/1");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
request.AddHeader("token", "5af4633b-0f68-403c-9340-a8d74dea05de");
request.AddParameter("text/plain", "",  ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);