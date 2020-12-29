require "uri"
require "net/http"

url = URI("https://api.nubox.com/Nubox.API/factura/1-9/1/productos")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["token"] = "f96321b5-4691-4f9a-b097-f34bcf500216"
request["Content-Type"] = "application/json"
request["Cookie"] = ".Stackify.Rum=4c648f24-1d4f-4817-a602-57005e5e24da"
request.body = "[\n    {\n      \"Codigo\": \"PR0001\",\n      \"Nombre\": \"Nombre Producto 1\",\n      \"Descripcion\": \"Descripción Producto 1\",\n      \"Cantidad\": 20,\n      \"Precio\": 15000,\n      \"Inventariable\": true\n    },\n    {\n      \"Codigo\": \"PR0002\",\n      \"Nombre\": \"Nombre Producto 2\",\n      \"Descripcion\": \"Descripción Producto 2\",\n      \"Cantidad\": 15,\n      \"Precio\": 23000,\n      \"Inventariable\": false\n    }\n  ]"

response = https.request(request)
puts response.read_body