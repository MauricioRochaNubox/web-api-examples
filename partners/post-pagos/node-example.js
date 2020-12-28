var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://api.nubox.com/nubox.api/Pago/',
  'headers': {
    'PartnerKey': 'eYP4xLMXBxqusvRz22L0dTNk',
    'token': 'aaf102b1-77ac-4f69-b833-122c478f15d3',
    'Content-Type': 'application/json',
    'Cookie': '.Stackify.Rum=4c648f24-1d4f-4817-a602-57005e5e24da'
  },
  body: JSON.stringify({"NumeroSerie":1,"RutContraparteEmisor":"16197839-6","RutEmpresaReceptor":"7964492-7","CodigoMedioDePago":"EFECTIVO","Fecha":"2020-04-14","MontoTotal":40984,"DetalleDocumentos":[{"Folio":12,"CodigoSIITipoDoc":33,"Monto":40984}]})

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
