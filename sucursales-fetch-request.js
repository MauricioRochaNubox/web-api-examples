var myHeaders = new Headers();
myHeaders.append("token", "37998f88-7701-4c3b-9d2f-3fee2e53aebc");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify([{"CodigoSII":1,"DireccionLegal":"Av. Apoquindo 102","ComunaLegalId":473,"Activa":true,"Codigo":"Codigo 1","Descripcion":"Sucursal Apoquindo"},{"CodigoSII":2,"DireccionLegal":"Av. Vitacura 2236","ComunaLegalId":473,"Activa":true,"Codigo":"Codigo 2","Descripcion":"Sucursal Vitacura"}]);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://api.nubox.com/Nubox.API/factura/1-9/1/sucursales", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
