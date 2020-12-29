require "uri"
require "net/http"

url = URI("https://api.nubox.com/Nubox.API/factura/1-9/1/clientes")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["token"] = "74d69e7e-8596-4ac6-8430-ed3c5da83bed"
request["Content-Type"] = "application/json"
request["Cookie"] = ".Stackify.Rum=4c648f24-1d4f-4817-a602-57005e5e24da"
request.body = "[\n  {\n    \"Rut\": \"2-7\",\n    \"RazonSocial\": \"Juan Cliente\",\n    \"Giro\": \"EMPRESA DE SERVICIOS DE INFORMATICA\",\n    \"Acteco\": \"ACTIVIDADES DE ASESORAMIENTO EMPRESARIAL Y EN MATERIA DE GESTION\",\n    \"DireccionLegal\": \"Orinoco 90\",\n    \"ComunaLegalNombre\": \"Las Condes\",\n    \"Contacto\": \"Juan Contador\",\n    \"Email\": \"juan.contador@ejemplo.com\",\n    \"seEnviaPDF\": 1\n  }\n]"

response = https.request(request)
puts response.read_body
