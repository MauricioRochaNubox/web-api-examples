require "uri"
require "net/http"

url = URI("https://api.nubox.com/Nubox.API/factura/documento/15478788-7/1/1000120/FAC/16910156-6/pdf")

https = Net::HTTP.new(url.host, url.port);
https.use_ssl = true

request = Net::HTTP::Get.new(url)
request["token"] = "68f3c9ef-e772-4001-9ee9-0eb371b4bdbd"

response = https.request(request)
puts response.read_body
