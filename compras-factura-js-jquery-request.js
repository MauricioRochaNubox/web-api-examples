var settings = {
  "url": "https://api.nubox.com/nubox.api/compra",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "token": "82bcbde5-4285-4ce1-8804-1bced937fd26",
    "Content-Type": "application/json"
  },
  "data": JSON.stringify(
  {
     "NumeroSerie":1,
     "Rut":"827-3",
     "RazonSocialProveedor":"Beta API",
     "CodigoSIITipoDoc":33,
     "Folio":1,
     "Fecha":"2020-04-14T00:00:00.000Z",
     "FechaVencimiento":"2020-05-14T00:00:00.000Z",
     "RutEmisor":"16197839-6",
     "MontoExento":0,
     "MontoNeto":34440,
     "MontoIva":6544,
     "MontoTotal":40984,
     "Glosa":"prueba de inserción de compra desde nubox",
     "MontoIvaNoRetenido":0,
     "IVAUsoComun":0,
     "Periodo":4,
     "Anno":2020,
     "TotalLey18211":0,
     "TipoTransaccionCompra":null,
     "NetoActivoFijo":0,
     "IvaActivoFijo":0
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
