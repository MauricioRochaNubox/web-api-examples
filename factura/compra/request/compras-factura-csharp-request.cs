var client = new RestClient("https://api.nubox.com/nubox.api/compra");
client.Timeout = -1;
var request = new RestRequest(Method.POST);
request.AddHeader("token", "aaf102b1-77ac-4f69-b833-122c478f15d3");
request.AddHeader("Content-Type", "application/json");
request.AddParameter("application/json", "\r\n{\r\n  \"NumeroSerie\": 1,\r\n  \"Rut\": \"7964492-7\",\r\n  \"RazonSocialProveedor\": \"Beta API\",\r\n  \"CodigoSIITipoDoc\": 33,\r\n  \"Folio\": 12,\r\n  \"Fecha\": \"2020-04-14T00:00:00.000Z\",\r\n  \"FechaVencimiento\": \"2020-05-14T00:00:00.000Z\",\r\n  \"RutEmisor\": \"16197839-6\",\r\n  \"MontoExento\": 0,\r\n  \"MontoNeto\":34440,\r\n  \"MontoIva\": 6544,\r\n  \"MontoTotal\": 40984,\r\n  \"Glosa\": null,\r\n  \"MontoIvaNoRetenido\": 0,\r\n  \"IVAUsoComun\": 0,\r\n  \"Periodo\": 4,\r\n  \"Anno\": 2020,\r\n  \"TotalLey18211\": 0,\r\n  \"TipoTransaccionCompra\": null,\r\n  \"NetoActivoFijo\": 0,\r\n  \"IvaActivoFijo\": 0\r\n}\r\n",  ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);