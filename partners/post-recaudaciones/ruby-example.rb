require "uri"
require "net/http"

url = URI("https://api.nubox.com/nubox.api/Recaudacion")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["PartnerKey"] = "eYP4xLMXBxqusvRz22L0dTNk"
request["token"] = "d5e7487e-2e7c-4088-9c78-efaf28946ac7"
request["Content-Type"] = "application/json"
request["Cookie"] = ".Stackify.Rum=4c648f24-1d4f-4817-a602-57005e5e24da"
request.body = "{\r\n  \"NumeroSerie\": 1, \t \r\n  \"RutContraparteReceptor\":\"16197839-6\",\r\n  \"RutEmpresaEmisor\": \"827-3\",\r\n  \"CodigoMedioDePago\": \"VALEVISTA\",\r\n  \"Fecha\": \"2020-05-01\",\r\n  \"MontoTotal\": 408553,\r\n  \"DetalleDocumentos\": [\r\n    {\r\n      \"Folio\": 1002,\r\n      \"CodigoSIITipoDoc\": 33,\r\n      \"Monto\": 408553\r\n    }\r\n  ]\r\n}"

response = https.request(request)
puts response.read_body
