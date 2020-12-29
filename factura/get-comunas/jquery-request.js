var settings = {
    "url": "https://api.nubox.com/Nubox.API/factura/comunas",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "token": "8b47950f-42cf-4ecd-9a9c-4bbcc86a86d2",
      "Cookie": ".Stackify.Rum=4c648f24-1d4f-4817-a602-57005e5e24da"
    },
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });