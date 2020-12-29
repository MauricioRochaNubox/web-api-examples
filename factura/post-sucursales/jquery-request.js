var settings = {
    "url": "https://api.nubox.com/Nubox.API/factura/1-9/1/sucursales",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "token": "37998f88-7701-4c3b-9d2f-3fee2e53aebc",
      "Content-Type": "application/json",
      "Cookie": ".Stackify.Rum=4c648f24-1d4f-4817-a602-57005e5e24da"
    },
    "data": JSON.stringify([{"CodigoSII":1,"DireccionLegal":"Av. Apoquindo 102","ComunaLegalId":473,"Activa":true,"Codigo":"Codigo 1","Descripcion":"Sucursal Apoquindo"},{"CodigoSII":2,"DireccionLegal":"Av. Vitacura 2236","ComunaLegalId":473,"Activa":true,"Codigo":"Codigo 2","Descripcion":"Sucursal Vitacura"}]),
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });