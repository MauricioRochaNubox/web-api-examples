var settings = {
  "url": "https://api.nubox.com/nubox.api/Recaudacion",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "PartnerKey": "eYP4xLMXBxqusvRz22L0dTNk",
    "token": "aaf102b1-77ac-4f69-b833-122c478f15d3",
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({"NumeroSerie":1,"RutContraparteReceptor":"16197839-6","RutEmpresaEmisor":"7964492-7","CodigoMedioDePago":"VALEVISTA","Fecha":"2020-04-14","MontoTotal":97023,"DetalleDocumentos":[{"Folio":7,"CodigoSIITipoDoc":33,"Monto":31241}]}),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
