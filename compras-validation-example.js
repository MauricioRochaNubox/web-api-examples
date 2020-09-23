var myHeaders = new Headers();
myHeaders.append("token", "67a86db2-ee63-4b4a-bcc4-b34f9dfb2130");
myHeaders.append("PartnerKey", "eYPPrjdXBx8uEsvRz22L0dTNk");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify(
{
   "NumeroSerie":1,
   "Rut":"1-9",
   "RazonSocialProveedor":"Beta API",
   "CodigoSIITipoDoc":33,
   "Folio":12,
   "Fecha":"2020-04-14T00:00:00.000Z",
   "FechaVencimiento":"2020-03-12T00:00:00.000Z",
   "RutEmisor":"2-7",
   "MontoExento":0,
   "MontoNeto":34440,
   "MontoIva":6544,
   "MontoTotal":40984,
   "Glosa":null,
   "MontoIvaNoRetenido":0,
   "IVAUsoComun":0,
   "Periodo":4,
   "Anno":2020,
   "TotalLey18211":0,
   "TipoTransaccionCompra":null,
   "NetoActivoFijo":0,
   "IvaActivoFijo":0
}
);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://api.nubox.com/nubox.api/compra", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
