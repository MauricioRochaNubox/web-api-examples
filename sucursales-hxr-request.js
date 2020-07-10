var data = JSON.stringify([{"CodigoSII":1,"DireccionLegal":"Av. Apoquindo 102","ComunaLegalId":473,"Activa":true,"Codigo":"Codigo 1","Descripcion":"Sucursal Apoquindo"},{"CodigoSII":2,"DireccionLegal":"Av. Vitacura 2236","ComunaLegalId":473,"Activa":true,"Codigo":"Codigo 2","Descripcion":"Sucursal Vitacura"}]);

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://api.nubox.com/Nubox.API/factura/1-9/1/sucursales");
xhr.setRequestHeader("token", "37998f88-7701-4c3b-9d2f-3fee2e53aebc");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.send(data);
