var client = new RestClient("https://api.nubox.com/Nubox.API/factura/1-9/1/productos");
client.Timeout = -1;
var request = new RestRequest(Method.POST);
request.AddHeader("token", "f96321b5-4691-4f9a-b097-f34bcf500216");
request.AddHeader("Content-Type", "application/json");
request.AddHeader("Cookie", ".Stackify.Rum=4c648f24-1d4f-4817-a602-57005e5e24da");
request.AddParameter("application/json", "[\n    {\n      \"Codigo\": \"PR0001\",\n      \"Nombre\": \"Nombre Producto 1\",\n      \"Descripcion\": \"Descripción Producto 1\",\n      \"Cantidad\": 20,\n      \"Precio\": 15000,\n      \"Inventariable\": true\n    },\n    {\n      \"Codigo\": \"PR0002\",\n      \"Nombre\": \"Nombre Producto 2\",\n      \"Descripcion\": \"Descripción Producto 2\",\n      \"Cantidad\": 15,\n      \"Precio\": 23000,\n      \"Inventariable\": false\n    }\n  ]",  ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);