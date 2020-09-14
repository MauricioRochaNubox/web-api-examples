var myHeaders = new Headers();
myHeaders.append("PartnerKey", "eYP4xLMXBxqusvRz22L0dTNk");
myHeaders.append("token", "f3f91280-2122-416a-a23e-72dec404d9f0");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"NumeroSerie":1,"RutContraparteReceptor":"1-9","RutEmpresaEmisor":"2-7","CodigoMedioDePago":"TARJETA DE CREDITO","Fecha":"2020-04-14","MontoTotal":97023,"DetalleDocumentos":[{"Folio":7,"CodigoSIITipoDoc":33,"Monto":31241}]});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://api.nubox.com/nubox.api/Recaudacion", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
