require "uri"
require "net/http"

url = URI("https://api.nubox.com/nubox.api/autenticar")

https = Net::HTTP.new(url.host, url.port);
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = "Basic aWM3cFJISjFOUHJkOkZudldRc2VB"

response = https.request(request)
puts response.read_body
