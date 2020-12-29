require "uri"
require "net/http"

url = URI("https://api.nubox.com/Nubox.API/factura/comunas")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)
request["token"] = "8b47950f-42cf-4ecd-9a9c-4bbcc86a86d2"
request["Cookie"] = ".Stackify.Rum=4c648f24-1d4f-4817-a602-57005e5e24da"

response = https.request(request)
puts response.read_body
