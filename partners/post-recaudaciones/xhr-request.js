var data = JSON.stringify({"NumeroSerie":1,"RutContraparteReceptor":"16197839-6","RutEmpresaEmisor":"827-3","CodigoMedioDePago":"VALEVISTA","Fecha":"2020-05-01","MontoTotal":408553,"DetalleDocumentos":[{"Folio":1002,"CodigoSIITipoDoc":33,"Monto":408553}]});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://api.nubox.com/nubox.api/Recaudacion");
xhr.setRequestHeader("PartnerKey", "eYP4xLMXBxqusvRz22L0dTNk");
xhr.setRequestHeader("token", "d5e7487e-2e7c-4088-9c78-efaf28946ac7");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Cookie", ".Stackify.Rum=4c648f24-1d4f-4817-a602-57005e5e24da");

xhr.send(data);