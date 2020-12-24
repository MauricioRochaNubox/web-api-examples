require "uri"
require "net/http"

url = URI("https://api.nubox.com/Nubox.API/factura/documento/1-6/compra/2020-06-17/FAC-EL/0/1")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)
request["token"] = "5af4633b-0f68-403c-9340-a8d74dea05de"

response = https.request(request)
puts response.read_body
