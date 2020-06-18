var settings = {
  "url": "https://api.nubox.com/Nubox.API/factura/documento/15478788-7/venta/2020-01-02/33/0/1?token",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "token": "d2f28227-bc22-4bd8-9cdc-c418c8197270"
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
