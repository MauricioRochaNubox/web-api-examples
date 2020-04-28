var data = JSON.stringify({"NumeroSerie":1,"RutContraparteReceptor":"16197839-6","RutEmpresaEmisor":"7964492-7","CodigoMedioDePago":"VALEVISTA","Fecha":"2020-04-14","MontoTotal":97023,"DetalleDocumentos":[{"Folio":7,"CodigoSIITipoDoc":33,"Monto":31241}]});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://api.nubox.com/nubox.api/Recaudacion");
xhr.setRequestHeader("PartnerKey", "eYP4xLMXBxqusvRz22L0dTNk");
xhr.setRequestHeader("token", "aaf102b1-77ac-4f69-b833-122c478f15d3");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.send(data);
