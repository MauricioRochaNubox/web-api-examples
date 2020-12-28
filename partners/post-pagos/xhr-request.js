var data = JSON.stringify({"NumeroSerie":1,"RutContraparteEmisor":"16197839-6","RutEmpresaReceptor":"7964492-7","CodigoMedioDePago":"EFECTIVO","Fecha":"2020-04-14","MontoTotal":40984,"DetalleDocumentos":[{"Folio":12,"CodigoSIITipoDoc":33,"Monto":40984}]});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://api.nubox.com/nubox.api/Pago/");
xhr.setRequestHeader("PartnerKey", "eYP4xLMXBxqusvRz22L0dTNk");
xhr.setRequestHeader("token", "aaf102b1-77ac-4f69-b833-122c478f15d3");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Cookie", ".Stackify.Rum=4c648f24-1d4f-4817-a602-57005e5e24da");

xhr.send(data);