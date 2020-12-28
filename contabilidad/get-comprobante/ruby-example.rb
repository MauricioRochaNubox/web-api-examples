require "uri"
require "net/http"

url = URI("https://api.nubox.com/nubox.api/contabilidad/Partner API/1/comprobante")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["token"] = "a691c25b-d4b9-4c3b-ad8b-1d3114d0335b"
request["Content-Type"] = "application/json"
request["Cookie"] = ".Stackify.Rum=4c648f24-1d4f-4817-a602-57005e5e24da"
request.body = "{\n    \"Descripcion\": \"comprobante ingresado por partner\",\n    \"Periodo\": \"2020-04-15T15:23:22.9470207-04:00\",\n    \"NumeroAsiento\": 12,\n    \"FechaIngreso\": \"2020-04-15T15:23:22.9470207-04:00\",\n    \"ValorTotal\": 3000,\n    \"TipoAsiento\": 2,\n    \"EstadoAsiento\": 4,\n    \"MovimientosContables\": [\n      {\n        \"Descripcion\": \"desde API - debe\",\n        \"CodigoCuenta\": \"1101-02\",\n        \"EsDebito\": true,\n        \"Valor\": 1500,\n        \"CodigoCentroDeCosto\": \"\",\n        \"CodigoSucursal\": \"\",\n        \"MovimientosAuxiliares\": [],\n        \"MovimientosBancarios\": [],\n        \"BoletasDeHonorarios\": []\n      },\n      {\n        \"Descripcion\": \"movimiento insertado desde API\",\n        \"CodigoCuenta\": \"1103-01\",\n        \"EsDebito\": false,\n        \"Valor\": 1500,\n        \"CodigoCentroDeCosto\": \"\",\n        \"CodigoSucursal\": \"\",\n        \"MovimientosAuxiliares\": [],\n        \"MovimientosBancarios\": [\n        \t{\n            \"EsDebito\": false,\n            \"Fecha\": \"2020-04-15T15:41:50.8812359-04:00\",\n            \"Valor\": 1500,\n            \"Folio\": 123456,\n            \"TipoMovimientoBancario\": \"COBRO CHEQUE\"\n        \t}\n        ],\n        \"BoletasDeHonorarios\": []\n      }\n    ]\n  }"

response = https.request(request)
puts response.read_body
