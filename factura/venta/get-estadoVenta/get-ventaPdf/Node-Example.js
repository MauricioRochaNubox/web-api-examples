var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://api.nubox.com/Nubox.API.cert/factura/documento/15478788-7/1/1/FAC-EL/pdf',
  'headers': {
    'token': '898e879d-ccba-40c4-898c-5d4a97f8ed9c',
    'Cookie': '.Stackify.Rum=f0af7579-7902-4bd2-b8e9-2fd72872bd71'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
