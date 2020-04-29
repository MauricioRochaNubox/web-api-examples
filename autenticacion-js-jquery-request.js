var settings = {
  "url": "https://api.nubox.com/nubox.api/autenticar",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Authorization": "Basic aWM3cFJISjFOUHJkOkZudldRc2VB"
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
