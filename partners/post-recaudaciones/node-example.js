var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://api.nubox.com/nubox.api/Recaudacion',
  'headers': {
    'PartnerKey': 'eYP4xLMXBxqusvRz22L0dTNk',
    'token': 'd5e7487e-2e7c-4088-9c78-efaf28946ac7',
    'Content-Type': 'application/json',
    'Cookie': '.Stackify.Rum=4c648f24-1d4f-4817-a602-57005e5e24da'
  },
  body: JSON.stringify({"NumeroSerie":1,"RutContraparteReceptor":"16197839-6","RutEmpresaEmisor":"827-3","CodigoMedioDePago":"VALEVISTA","Fecha":"2020-05-01","MontoTotal":408553,"DetalleDocumentos":[{"Folio":1002,"CodigoSIITipoDoc":33,"Monto":408553}]})

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
