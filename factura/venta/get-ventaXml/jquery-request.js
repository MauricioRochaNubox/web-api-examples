var settings = {
  "url": "https://api.nubox.com/Nubox.API/factura/documento/15478788-7/venta/2020-06-22/FAC-EL/9/1",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "token": "9df9b12c-c33a-42ab-bfae-1e4b3abb16cc",
    "Cookie": ".Stackify.Rum=4c648f24-1d4f-4817-a602-57005e5e24da"
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});