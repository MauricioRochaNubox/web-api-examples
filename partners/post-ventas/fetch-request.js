var myHeaders = new Headers();
myHeaders.append("PartnerKey", "eYP4xLMXBxqusvRz22L0dTNk");
myHeaders.append("token", "d5e7487e-2e7c-4088-9c78-efaf28946ac7");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", ".Stackify.Rum=4c648f24-1d4f-4817-a602-57005e5e24da");

var raw = JSON.stringify({"NumeroSerie":1,"Rut":"827-3","Folio":1002,"CodigoTipoDocumento":33,"FechaEmision":"2020-05-01T00:00:00.000Z","MontoNeto":343330,"MontoExento":0,"MontoIva":65223,"MontoTotal":408553,"Contraparte":{"Rut":"16197839-6","RazonSocial":"Beta API","ComunaId":644}});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://api.nubox.com/nubox.api/venta", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));