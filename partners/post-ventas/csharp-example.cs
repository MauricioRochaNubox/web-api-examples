var client = new RestClient("https://api.nubox.com/nubox.api/venta");
client.Timeout = -1;
var request = new RestRequest(Method.POST);
request.AddHeader("PartnerKey", "eYP4xLMXBxqusvRz22L0dTNk");
request.AddHeader("token", "d5e7487e-2e7c-4088-9c78-efaf28946ac7");
request.AddHeader("Content-Type", "application/json");
request.AddHeader("Cookie", ".Stackify.Rum=4c648f24-1d4f-4817-a602-57005e5e24da");
request.AddParameter("application/json", "\r\n{\r\n  \"NumeroSerie\": 1,\r\n  \"Rut\": \"827-3\",\r\n  \"Folio\":1002,\r\n  \"CodigoTipoDocumento\": 33,\r\n  \"FechaEmision\": \"2020-05-01T00:00:00.000Z\",\r\n  \"MontoNeto\":343330,\r\n  \"MontoExento\": 0,\r\n  \"MontoIva\":65223,\r\n  \"MontoTotal\": 408553,\r\n  \"Contraparte\": {\r\n    \"Rut\": \"16197839-6\",\r\n    \"RazonSocial\": \"Beta API\",\r\n    \"ComunaId\": 644\r\n  }\r\n}\r\n\r\n",  ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);