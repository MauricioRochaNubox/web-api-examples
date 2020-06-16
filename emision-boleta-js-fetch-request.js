var myHeaders = new Headers();
myHeaders.append("token", "ed535f0e-2da9-4315-ae1c-83db643b2357");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"productos":[{"fechaEmision":"2020-06-16T08:36:14.4221255-04:00","folio":5000,"rutContraparte":"11111111-1","razonSocialContraparte":"venta23","giroContraparte":"Servicios","comunaContraparte":"Vitacura","direccionContraparte":"Candelaria Goyenechea 3820, Vitacura","emailContraparte":"mail@ejemplo.com","codigoSucursal":"RM","secuencia":1,"afecto":"SI","producto":"Privado","descripcion":"Servicio","cantidad":1,"precio":150000,"valor":150000,"codigoItem":"01","unidadMedida":"UNID","fechaVencimiento":"2020-06-16T08:36:14.4221255-04:00","codigoSIITipoDeServicio":"1","fechaPeriodoDesde":"2020-06-16T08:36:14.4221255-04:00","fechaPeriodoHasta":"2020-06-16T08:36:14.4221255-04:00","observacion":"Observación"}],"documentoReferenciado":{"tipo":0,"folio":123456,"secuencia":1,"tipoDocumentoReferenciado":0,"folioDocumentoReferenciado":654321,"fechaDocumentoReferenciado":"2020-06-16T08:36:14.4221255-04:00","motivoReferencia":1000,"glosa":"Glosa"}});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://api.nubox.com/Nubox.API.cert/factura/documento/15478788-7/1/13954729-2/1/39/dte/extendido", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
