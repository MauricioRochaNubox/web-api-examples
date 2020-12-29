var myHeaders = new Headers();
myHeaders.append("token", "74d69e7e-8596-4ac6-8430-ed3c5da83bed");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", ".Stackify.Rum=4c648f24-1d4f-4817-a602-57005e5e24da");

var raw = JSON.stringify([{"Rut":"2-7","RazonSocial":"Juan Cliente","Giro":"EMPRESA DE SERVICIOS DE INFORMATICA","Acteco":"ACTIVIDADES DE ASESORAMIENTO EMPRESARIAL Y EN MATERIA DE GESTION","DireccionLegal":"Orinoco 90","ComunaLegalNombre":"Las Condes","Contacto":"Juan Contador","Email":"juan.contador@ejemplo.com","seEnviaPDF":1}]);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://api.nubox.com/Nubox.API/factura/1-9/1/clientes", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));