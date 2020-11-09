var client = new RestClient("https://api.nubox.com/nubox.api/autenticar");
client.Timeout = -1;
var request = new RestRequest(Method.POST);
request.AddHeader("Authorization", "Basic aWM3cFJISjFOUHJkOkZudldRc2VB");
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
