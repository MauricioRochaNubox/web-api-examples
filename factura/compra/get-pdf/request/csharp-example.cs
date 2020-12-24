var client = new RestClient("https://api.nubox.com/Nubox.API/factura/documento/15478788-7/1/1000120/FAC/16910156-6/pdf");
client.Timeout = -1;

var request = new RestRequest(Method.GET);
request.AddHeader("token", "68f3c9ef-e772-4001-9ee9-0eb371b4bdbd");
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
