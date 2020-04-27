var myHeaders = new Headers();
myHeaders.append("PartnerKey", "eYP4xLMXBxqusvRz22L0dTNk");
myHeaders.append("token", "aaf102b1-77ac-4f69-b833-122c478f15d3");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"NumeroSerie":1,"RutContraparteEmisor":"16197839-6","RutEmpresaReceptor":"7964492-7","CodigoMedioDePago":"EFECTIVO","Fecha":"2020-04-14","MontoTotal":40984,"DetalleDocumentos":[{"Folio":12,"CodigoSIITipoDoc":33,"Monto":40984}]});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://api.nubox.com/nubox.api/Pago/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
