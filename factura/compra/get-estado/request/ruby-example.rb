require "uri"
require "net/http"

url = URI("https://api.nubox.com/Nubox.API/factura/documento/1-9/estadocompra/0/FAC/1/2-7")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)
request["token"] = "ab016ed6-1d8a-40c9-9eb8-418fbcb47c1a"

response = https.request(request)
puts response.read_body
