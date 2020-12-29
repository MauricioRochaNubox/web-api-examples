var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://api.nubox.com/Nubox.API/factura/comunas',
  'headers': {
    'token': '8b47950f-42cf-4ecd-9a9c-4bbcc86a86d2',
    'Cookie': '.Stackify.Rum=4c648f24-1d4f-4817-a602-57005e5e24da'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
