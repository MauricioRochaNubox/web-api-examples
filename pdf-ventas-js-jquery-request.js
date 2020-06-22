var settings = {
  "url": "https://api.nubox.com/Nubox.API/factura/documento/15478788-7/1/1/FAC/pdf",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "token": "898e879d-ccba-40c4-898c-5d4a97f8ed9c"
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
