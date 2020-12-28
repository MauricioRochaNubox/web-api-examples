var data = JSON.stringify({"NumeroSerie":1,"Rut":"827-3","Folio":1002,"CodigoTipoDocumento":33,"FechaEmision":"2020-05-01T00:00:00.000Z","MontoNeto":343330,"MontoExento":0,"MontoIva":65223,"MontoTotal":408553,"Contraparte":{"Rut":"16197839-6","RazonSocial":"Beta API","ComunaId":644}});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://api.nubox.com/nubox.api/venta");
xhr.setRequestHeader("PartnerKey", "eYP4xLMXBxqusvRz22L0dTNk");
xhr.setRequestHeader("token", "d5e7487e-2e7c-4088-9c78-efaf28946ac7");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Cookie", ".Stackify.Rum=4c648f24-1d4f-4817-a602-57005e5e24da");

xhr.send(data);