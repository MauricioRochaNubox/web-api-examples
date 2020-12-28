require "uri"
require "net/http"

url = URI("https://api.nubox.com/Nubox.API.cert/factura/documento/1-9/1/2-7/1/39/dte/extendido")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["token"] = "11bfbe68-a682-4d7c-bb95-56f045f22933"
request["Content-Type"] = "application/json"
request.body = "{\n    \"productos\": [\n      {\n        \"fechaEmision\": \"2020-06-16T08:36:14.4221255-04:00\",\n        \"folio\": 5000,\n        \"rutContraparte\": \"11111111-1\",\n        \"razonSocialContraparte\": \"venta23\",\n        \"giroContraparte\": \"Servicios\",\n        \"comunaContraparte\": \"Vitacura\",\n        \"direccionContraparte\": \"Candelaria Goyenechea 3820, Vitacura\",\n        \"emailContraparte\": \"mail@ejemplo.com\",\n        \"codigoSucursal\": \"123\",\n        \"secuencia\": 1,\n        \"afecto\": \"SI\",\n        \"producto\": \"Privado\",\n        \"descripcion\": \"Servicio\",\n        \"cantidad\": 1,\n        \"precio\": 150000,\n        \"valor\": 150000,\n        \"codigoItem\": \"01\",\n        \"unidadMedida\": \"UNID\",\n        \"fechaVencimiento\": \"2020-06-16T08:36:14.4221255-04:00\",\n        \"codigoSIITipoDeServicio\": \"1\",\n        \"fechaPeriodoDesde\": \"2020-06-16T08:36:14.4221255-04:00\",\n        \"fechaPeriodoHasta\": \"2020-06-16T08:36:14.4221255-04:00\",\n        \"observacion\": \"Observación\"\n      }\n    ],\n    \"documentoReferenciado\": {\n      \"tipo\": 0,\n      \"folio\": 123456,\n      \"secuencia\": 1,\n      \"tipoDocumentoReferenciado\": 0,\n      \"folioDocumentoReferenciado\": 654321,\n      \"fechaDocumentoReferenciado\": \"2020-06-16T08:36:14.4221255-04:00\",\n      \"motivoReferencia\": 1000,\n      \"glosa\": \"Glosa\"\n    }\n  }"

response = https.request(request)
puts response.read_body
