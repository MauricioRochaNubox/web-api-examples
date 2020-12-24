var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://api.nubox.com/Nubox.API/factura/documento/15478788-7/1/1000120/FAC/16910156-6/pdf',
  'headers': {
    'token': '68f3c9ef-e772-4001-9ee9-0eb371b4bdbd'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
