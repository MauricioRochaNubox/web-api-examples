var https = require('follow-redirects').https;
var fs = require('fs');

var options = {
  'method': 'GET',
  'hostname': 'api.nubox.com',
  'path': '/Nubox.API/factura/documento/1-9/estadoventa/468/FAC-EL/1',
  'headers': {
    'token': 'dd380573-3dac-41c1-bbed-8c954f743ff8',
    'Cookie': '.Stackify.Rum=f0af7579-7902-4bd2-b8e9-2fd72872bd71'
  },
  'maxRedirects': 20
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

req.end();