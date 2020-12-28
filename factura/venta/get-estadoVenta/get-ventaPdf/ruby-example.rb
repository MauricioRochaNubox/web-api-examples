require "uri"
require "net/http"

url = URI("https://api.nubox.com/Nubox.API.cert/factura/documento/15478788-7/1/1/FAC-EL/pdf")

https = Net::HTTP.new(url.host, url.port);
https.use_ssl = true

request = Net::HTTP::Get.new(url)
request["token"] = "898e879d-ccba-40c4-898c-5d4a97f8ed9c"
request["Cookie"] = ".Stackify.Rum=f0af7579-7902-4bd2-b8e9-2fd72872bd71"

response = https.request(request)
puts response.read_body
