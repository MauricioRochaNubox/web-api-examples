var settings = {
  "url": "https://api.nubox.com/nubox.api/Pago/",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "PartnerKey": "eYP4xLMXBxqusvRz22L0dTNk",
    "token": "aaf102b1-77ac-4f69-b833-122c478f15d3",
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({"NumeroSerie":1,"RutContraparteEmisor":"16197839-6","RutEmpresaReceptor":"7964492-7","CodigoMedioDePago":"EFECTIVO","Fecha":"2020-04-14","MontoTotal":40984,"DetalleDocumentos":[{"Folio":12,"CodigoSIITipoDoc":33,"Monto":40984}]}),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
