var settings = {
  "url": "https://api.nubox.com/Nubox.API/factura/documento/1-9/estadocompra/0/FAC/1/2-7",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "token": "ab016ed6-1d8a-40c9-9eb8-418fbcb47c1a"
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
