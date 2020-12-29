require "uri"
require "net/http"

url = URI("https://api.nubox.com/Nubox.API/factura/documento/1-9/estadoventa/468/FAC-EL/1")

https = Net::HTTP.new(url.host, url.port);
https.use_ssl = true

request = Net::HTTP::Get.new(url)
request["token"] = "dd380573-3dac-41c1-bbed-8c954f743ff8"
request["Cookie"] = ".Stackify.Rum=f0af7579-7902-4bd2-b8e9-2fd72872bd71"

response = https.request(request)
puts response.read_body
