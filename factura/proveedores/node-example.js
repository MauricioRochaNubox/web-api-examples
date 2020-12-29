var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://api.nubox.com/Nubox.API/factura/1-9/1/proveedores',
  'headers': {
    'token': '9f83d9db-61f9-4da3-8b64-c1e0ac746946',
    'Content-Type': 'application/json',
    'Cookie': '.Stackify.Rum=4c648f24-1d4f-4817-a602-57005e5e24da'
  },
  body: JSON.stringify([{"Rut":"7809318-8","RazonSocial":"Juan Proveedor","Giro":"EMPRESA DE SERVICIOS","Acteco":"ACTIVIDADES DE ASESORAMIENTO EMPRESARIAL Y EN MATERIA DE GESTION","DireccionLegal":"Orinoco 90","ComunaLegalNombre":"Las Condes","Contacto":"Juan Contador","Email":"juan.contador@ejemplo.com","seEnviaPDF":1}])

};

request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
