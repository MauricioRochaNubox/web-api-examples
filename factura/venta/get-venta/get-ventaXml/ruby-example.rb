require "uri"
require "net/http"

url = URI("https://api.nubox.com/Nubox.API.Cert/factura/documento/15478788-7/venta/2020-06-22/FAC-EL/9/1")

https = Net::HTTP.new(url.host, url.port);
https.use_ssl = true

request = Net::HTTP::Get.new(url)
request["token"] = "9df9b12c-c33a-42ab-bfae-1e4b3abb16cc"
request["Cookie"] = ".Stackify.Rum=f0af7579-7902-4bd2-b8e9-2fd72872bd71"

response = https.request(request)
puts response.read_body
