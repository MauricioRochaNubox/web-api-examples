require "uri"
require "net/http"

url = URI("https://api.nubox.com/Nubox.API/factura/1-9/1/sucursales")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["token"] = "37998f88-7701-4c3b-9d2f-3fee2e53aebc"
request["Content-Type"] = "application/json"
request["Cookie"] = ".Stackify.Rum=4c648f24-1d4f-4817-a602-57005e5e24da"
request.body = "[\n    {\n      \"CodigoSII\": 1,\n      \"DireccionLegal\": \"Av. Apoquindo 102\",\n      \"ComunaLegalId\": 473,\n      \"Activa\": true,\n      \"Codigo\": \"Codigo 1\",\n      \"Descripcion\": \"Sucursal Apoquindo\"\n    },\n    {\n      \"CodigoSII\": 2,\n      \"DireccionLegal\": \"Av. Vitacura 2236\",\n      \"ComunaLegalId\": 473,\n      \"Activa\": true,\n      \"Codigo\": \"Codigo 2\",\n      \"Descripcion\": \"Sucursal Vitacura\"\n    }\n  ]"

response = https.request(request)
puts response.read_body
