var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://api.nubox.com/nubox.api/autenticar',
  'headers': {
    'Authorization': 'Basic aWM3cFJISjFOUHJkOkZudldRc2VB'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
