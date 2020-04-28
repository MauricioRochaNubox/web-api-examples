var myHeaders = new Headers();
myHeaders.append("PartnerKey", "eYP4xLMXBxqusvRz22L0dTNk");
myHeaders.append("token", "7c4e408e-ff81-426b-a927-b2e71c21de05");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"NumeroSerie":1,"Rut":"7964492-7","Folio":5,"CodigoTipoDocumento":39,"FechaEmision":"2020-04-01T00:00:00.000Z","MontoNeto":343330,"MontoExento":0,"MontoIva":65223,"MontoTotal":408563,"Contraparte":{"Rut":"16197839-6","RazonSocial":"Beta API","ComunaId":644}});

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
