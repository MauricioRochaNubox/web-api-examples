var client = new RestClient("https://api.nubox.com/Nubox.API.Cert/factura/documento/1-9/estadoventa/468/FAC-EL/1");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
request.AddHeader("token", "dd380573-3dac-41c1-bbed-8c954f743ff8");
request.AddHeader("Cookie", ".Stackify.Rum=f0af7579-7902-4bd2-b8e9-2fd72872bd71");
request.AddParameter("text/plain", "",  ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);