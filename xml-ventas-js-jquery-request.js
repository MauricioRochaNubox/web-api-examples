var settings = {
  "url": "https://api.nubox.com/Nubox.API/factura/documento/15478788-7/venta/2020-01-02/33/0/1",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "token": "898e879d-ccba-40c4-898c-5d4a97f8ed9c"
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
