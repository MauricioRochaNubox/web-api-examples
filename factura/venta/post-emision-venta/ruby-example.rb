require "uri"
require "net/http"

url = URI("https://api.nubox.com/Nubox.API/factura/documento/15478788-7/1/rutFuncionario/1/emitir/ventaExtendido?rutFuncionario=13954729-2&emitir=true")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["token"] = "f49ddf96-fdb5-4394-8cbd-0b6229dde981"
request["Content-Type"] = "application/json"
request["Cookie"] = ".Stackify.Rum=4c648f24-1d4f-4817-a602-57005e5e24da"
request.body = "{\n    \"productos\": [\n      {\n        \"rutContraparte\": \"11111111-1\",\n        \"razonSocialContraparte\": \"venta23\",\n        \"giroContraparte\": \"venta23\",\n        \"tipo\": 33,\n        \"folio\": 1600,\n        \"secuencia\": 1,\n        \"fecha\": \"2020-06-22T00:00:00.8751996-04:00\",\n        \"afecto\": \"SI\",\n        \"producto\": \"producto de ejemplo\",\n        \"descripcion\": null,\n        \"cantidad\": 1,\n        \"comunaContraparte\": \"Las Condes\",\n        \"direccionContraparte\": \"Av Vitacura 3110\",\n        \"precio\": 70000,\n        \"valor\": 70000,\n        \"ponderacionDescuento\": 0,\n        \"emailContraparte\": \"mail@ejemplo.com\",\n        \"tipoDeServicio\": \"\",\n        \"fechaPeriodoDesde\": \"\",\n        \"fechaPeriodoHasta\": \"\",\n        \"fechaVencimiento\": \"\",\n        \"codigoSucursal\": \"Cod 0001\",\n        \"vendedor\": \"Pedro Sanchez\",\n        \"codigoItem\": \"01\",\n        \"unidadMedida\": \"UNID\",\n        \"codigoIMP\": \"\",\n        \"montoIMP\": 0,\n        \"indicadorDeTraslado\": \"1\",\n        \"formaDePago\": \"1\",\n        \"medioDePago\": \"EF\",\n        \"terminosDePagoDias\": \"\",\n        \"terminosDePagoCodigo\": \"\",\n        \"comunaDestino\": \"Santiago\",\n        \"rutSolicitanteFactura\": \"9663691-1\",\n        \"productoCambioSujeto\": \"\",\n        \"cantidadMontoCambioSujeto\": 0,\n        \"tipoGlobalAfecto\": \"\",\n        \"valorGlobalAfecto\": 0,\n        \"tipoGlobalExento\": \"\",\n        \"valorGlobalExento\": 0,\n        \"precioCambioSujeto\": 0,\n        \"descuentoMonto\": 0,\n        \"rutTransportista\": \"14183701-k\",\n        \"rutChofer\": \"14183701-k\",\n        \"patente\": \"SVFV02\",\n        \"nombreChofer\": \"Juan Pereira\",\n        \"direccionDestino\": \"Santa Rosa 215\",\n        \"ciudadDestino\": \"Santiago\",\n        \"tipoDeDespacho\": \"\",\n        \"nombreDeContacto\": \"Lorena Álvarez\",\n        \"observacion\": \"Observación.\"\n      }\n    ],\n    \"documentoReferenciado\": {\n      \"tipo\": 0,\n      \"folio\": 2343,\n      \"secuencia\": 0,\n      \"tipoDocumentoReferenciado\": 0,\n      \"folioDocumentoReferenciado\": 34,\n      \"fechaDocumentoReferenciado\": \"2020-06-22T15:31:10.8751996-04:00\",\n      \"motivoReferencia\": 0,\n      \"glosa\": \"Glosa\"\n    }\n  }"

response = https.request(request)
puts response.read_body
