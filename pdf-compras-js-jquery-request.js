var settings = {
  "url": "https://api.nubox.com/Nubox.API/factura/documento/15478788-7/1/1/FAC/1-9/pdf",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "token": "898e879d-ccba-40c4-898c-5d4a97f8ed9c",
    "Content-Type": "application/json"
  },
  "data": "\n\nhttps://api.nubox.com/Nubox.API/factura/documento/15478788-7/1/1/FAC/1-9/pdf",
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
