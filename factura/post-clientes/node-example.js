var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://api.nubox.com/Nubox.API/factura/1-9/1/clientes',
  'headers': {
    'token': '74d69e7e-8596-4ac6-8430-ed3c5da83bed',
    'Content-Type': 'application/json',
    'Cookie': '.Stackify.Rum=4c648f24-1d4f-4817-a602-57005e5e24da'
  },
  body: JSON.stringify([{"Rut":"2-7","RazonSocial":"Juan Cliente","Giro":"EMPRESA DE SERVICIOS DE INFORMATICA","Acteco":"ACTIVIDADES DE ASESORAMIENTO EMPRESARIAL Y EN MATERIA DE GESTION","DireccionLegal":"Orinoco 90","ComunaLegalNombre":"Las Condes","Contacto":"Juan Contador","Email":"juan.contador@ejemplo.com","seEnviaPDF":1}])

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
