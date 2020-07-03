var settings = {
  "url": "https://api.nubox.com/Nubox.API/factura/documento/1-6/1/2-0/documento",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "token": "320c6fba-a205-4d0d-9115-70e538eb8a96",
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({"codigoSIITipoDoc":33,"folio":"215","fecha":"2020-07-02","rutEmisor":"25605060-9","razonSocialEmisor":"Razon social","estado":"BORRADOR","montoExento":0,"montoNeto":2000,"montoIva":500,"montoTotal":2500,"glosa":"glosa","montoIvaNoRetenido":0,"IVAUsoComun":0,"periodo":10,"anno":1999,"totalLey18211":0,"tipoTransaccionCompra":"GIRO","netoActivoFijo":2000,"IVAActivoFijo":10,"otrosImpuestos":[{"codigoImpuesto":14,"montoImpuesto":200}],"IVANoRecuperable":{"codigo":1,"monto":500},"comisionesYOtrosCargos":{"neto":0,"exento":0,"IVA":0,"total":0}}),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
