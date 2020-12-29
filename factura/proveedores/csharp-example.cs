var client = new RestClient("https://api.nubox.com/Nubox.API/factura/1-9/1/proveedores");
client.Timeout = -1;

var request = new RestRequest(Method.POST);
request.AddHeader("token", "9f83d9db-61f9-4da3-8b64-c1e0ac746946");
request.AddHeader("Content-Type", "application/json");
request.AddHeader("Cookie", ".Stackify.Rum=4c648f24-1d4f-4817-a602-57005e5e24da");
request.AddParameter("application/json", "[\n{\n    \"Rut\": \"7809318-8\",\n    \"RazonSocial\": \"Juan Proveedor\",\n    \"Giro\": \"EMPRESA DE SERVICIOS\",\n    \"Acteco\": \"ACTIVIDADES DE ASESORAMIENTO EMPRESARIAL Y EN MATERIA DE GESTION\",\n    \"DireccionLegal\": \"Orinoco 90\",\n    \"ComunaLegalNombre\": \"Las Condes\",\n    \"Contacto\": \"Juan Contador\",\n    \"Email\": \"juan.contador@ejemplo.com\",\n    \"seEnviaPDF\": 1\n  }\n]",  ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);