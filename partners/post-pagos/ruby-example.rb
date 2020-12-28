require "uri"
require "net/http"

url = URI("https://api.nubox.com/nubox.api/Pago/")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["PartnerKey"] = "eYP4xLMXBxqusvRz22L0dTNk"
request["token"] = "aaf102b1-77ac-4f69-b833-122c478f15d3"
request["Content-Type"] = "application/json"
request["Cookie"] = ".Stackify.Rum=4c648f24-1d4f-4817-a602-57005e5e24da"
request.body = "{\r\n  \"NumeroSerie\": 1,\r\n  \"RutContraparteEmisor\": \"16197839-6\",\r\n  \"RutEmpresaReceptor\": \"7964492-7\",\r\n  \"CodigoMedioDePago\": \"EFECTIVO\",\r\n  \"Fecha\": \"2020-04-14\",\r\n  \"MontoTotal\": 40984,\r\n  \"DetalleDocumentos\": [\r\n    {\r\n      \"Folio\": 12,\r\n      \"CodigoSIITipoDoc\": 33,\r\n      \"Monto\": 40984\r\n    }\r\n  ]\r\n}\r\n"

response = https.request(request)
puts response.read_body
