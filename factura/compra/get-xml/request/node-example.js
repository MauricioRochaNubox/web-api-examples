var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://api.nubox.com/Nubox.API/factura/documento/1-6/compra/2020-06-17/FAC-EL/0/1',
  'headers': {
    'token': '5af4633b-0f68-403c-9340-a8d74dea05de'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
