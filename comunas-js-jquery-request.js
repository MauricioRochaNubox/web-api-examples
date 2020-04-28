var settings = {
  "url": "https://api.nubox.com/Nubox.API/factura/comunas",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "token": "8b47950f-42cf-4ecd-9a9c-4bbcc86a86d2"
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
