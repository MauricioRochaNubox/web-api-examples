var myHeaders = new Headers();
myHeaders.append("PartnerKey", "eYP4xLMXBxqusvRz22L0dTNk");
myHeaders.append("token", "aaf102b1-77ac-4f69-b833-122c478f15d3");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"NumeroSerie":1,"RutContraparteReceptor":"16197839-6","RutEmpresaEmisor":"7964492-7","CodigoMedioDePago":"VALEVISTA","Fecha":"2020-04-14","MontoTotal":97023,"DetalleDocumentos":[{"Folio":7,"CodigoSIITipoDoc":33,"Monto":31241}]});

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
