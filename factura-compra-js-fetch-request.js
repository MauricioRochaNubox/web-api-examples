var myHeaders = new Headers();
myHeaders.append("token", "320c6fba-a205-4d0d-9115-70e538eb8a96");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"codigoSIITipoDoc":33,"folio":"215","fecha":"2020-07-02","rutEmisor":"25605060-9","razonSocialEmisor":"Prueba SA","estado":"BORRADOR","montoExento":0,"montoNeto":2000,"montoIva":500,"montoTotal":2500,"glosa":"glosa","montoIvaNoRetenido":0,"IVAUsoComun":0,"periodo":10,"anno":1999,"totalLey18211":0,"tipoTransaccionCompra":"GIRO","netoActivoFijo":2000,"IVAActivoFijo":10,"otrosImpuestos":[{"codigoImpuesto":14,"montoImpuesto":200}],"IVANoRecuperable":{"codigo":1,"monto":500},"comisionesYOtrosCargos":{"neto":0,"exento":0,"IVA":0,"total":0}});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://api.nubox.com/Nubox.API/factura/documento/1-6/1/2-0/documento", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
