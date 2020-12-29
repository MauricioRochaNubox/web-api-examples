var settings = {
  "url": "https://api.nubox.com/Nubox.API/factura/documento/15478788-7/1/1/FAC-EL/pdf",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "token": "898e879d-ccba-40c4-898c-5d4a97f8ed9c",
    "Cookie": ".Stackify.Rum=4c648f24-1d4f-4817-a602-57005e5e24da"
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});