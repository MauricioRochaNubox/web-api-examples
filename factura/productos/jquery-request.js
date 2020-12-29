var settings = {
    "url": "https://api.nubox.com/Nubox.API/factura/1-9/1/productos",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "token": "f96321b5-4691-4f9a-b097-f34bcf500216",
      "Content-Type": "application/json",
      "Cookie": ".Stackify.Rum=4c648f24-1d4f-4817-a602-57005e5e24da"
    },
    "data": JSON.stringify([{"Codigo":"PR0001","Nombre":"Nombre Producto 1","Descripcion":"Descripción Producto 1","Cantidad":20,"Precio":15000,"Inventariable":true},{"Codigo":"PR0002","Nombre":"Nombre Producto 2","Descripcion":"Descripción Producto 2","Cantidad":15,"Precio":23000,"Inventariable":false}]),
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });