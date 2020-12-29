require "uri"
require "net/http"

url = URI("https://api.nubox.com/Nubox.API/factura/1-9/1/proveedores")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["token"] = "9f83d9db-61f9-4da3-8b64-c1e0ac746946"
request["Content-Type"] = "application/json"
request["Cookie"] = ".Stackify.Rum=4c648f24-1d4f-4817-a602-57005e5e24da"
request.body = "[\n{\n    \"Rut\": \"7809318-8\",\n    \"RazonSocial\": \"Juan Proveedor\",\n    \"Giro\": \"EMPRESA DE SERVICIOS\",\n    \"Acteco\": \"ACTIVIDADES DE ASESORAMIENTO EMPRESARIAL Y EN MATERIA DE GESTION\",\n    \"DireccionLegal\": \"Orinoco 90\",\n    \"ComunaLegalNombre\": \"Las Condes\",\n    \"Contacto\": \"Juan Contador\",\n    \"Email\": \"juan.contador@ejemplo.com\",\n    \"seEnviaPDF\": 1\n  }\n]"

response = https.request(request)
puts response.read_body
