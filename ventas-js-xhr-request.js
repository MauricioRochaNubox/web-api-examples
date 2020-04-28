var data = JSON.stringify({"NumeroSerie":1,"Rut":"7964492-7","Folio":5,"CodigoTipoDocumento":39,"FechaEmision":"2020-04-01T00:00:00.000Z","MontoNeto":343330,"MontoExento":0,"MontoIva":65223,"MontoTotal":408563,"Contraparte":{"Rut":"16197839-6","RazonSocial":"Beta API","ComunaId":644}});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://api.nubox.com/nubox.api/venta");
xhr.setRequestHeader("PartnerKey", "eYP4xLMXBxqusvRz22L0dTNk");
xhr.setRequestHeader("token", "7c4e408e-ff81-426b-a927-b2e71c21de05");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.send(data);
