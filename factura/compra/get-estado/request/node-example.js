var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://api.nubox.com/Nubox.API/factura/documento/1-9/estadocompra/0/FAC/1/2-7',
  'headers': {
    'token': 'ab016ed6-1d8a-40c9-9eb8-418fbcb47c1a'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
