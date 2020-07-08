var settings = {
  "url": "https://api.nubox.com/Nubox.API.Cert/factura/1-9/1/clientes",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "token": "74d69e7e-8596-4ac6-8430-ed3c5da83bed",
    "Content-Type": "application/json"
  },
  "data": JSON.stringify([{"Rut":"2-7","RazonSocial":"Juan Cliente","Giro":"EMPRESA DE SERVICIOS DE INFORMATICA","Acteco":"ACTIVIDADES DE ASESORAMIENTO EMPRESARIAL Y EN MATERIA DE GESTION","DireccionLegal":"Orinoco 90","ComunaLegalNombre":"Las Condes","Contacto":"Juan Contador","Email":"juan.contador@ejemplo.com","seEnviaPDF":1}]),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
