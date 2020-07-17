var settings = {
  "url": "https://api.nubox.com/Nubox.API/factura/documento/1-9/estadoventa/5455/FAC-EL/1",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "token": "612528bc-6b02-4ffc-8203-f4d36fd78c29"
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
