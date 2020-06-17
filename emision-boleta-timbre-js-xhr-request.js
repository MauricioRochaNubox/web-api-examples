var data = JSON.stringify({"productos":[{"fechaEmision":"2020-06-16T08:36:14.4211504-04:00","folio":1,"rutContraparte":"23863483-0","razonSocialContraparte":"Servicios LTDA.","giroContraparte":"Servicios","comunaContraparte":"Vitacura","direccionContraparte":"Candelaria Goyenechea 3820, Vitacura","emailContraparte":"mail@ejemplo.com","codigoSucursal":"RM","secuencia":1,"afecto":"SI","producto":"Privado","descripcion":"Servicio","cantidad":1,"precio":150000,"valor":150000,"codigoItem":"01","unidadMedida":"UNID","fechaVencimiento":"2020-06-16T08:36:14.4211504-04:00","codigoSIITipoDeServicio":"1","fechaPeriodoDesde":"2020-06-16T08:36:14.4211504-04:00","fechaPeriodoHasta":"2020-06-16T08:36:14.4211504-04:00","observacion":"Observación"}],"documentoReferenciado":{"tipo":0,"folio":123456,"secuencia":1,"tipoDocumentoReferenciado":0,"folioDocumentoReferenciado":654321,"fechaDocumentoReferenciado":"2020-06-16T08:36:14.4211504-04:00","motivoReferencia":1000,"glosa":"Glosa"}});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://api.nubox.com/Nubox.API.cert/factura/documento/15478788-7/1/13954729-2/1/39/dte");
xhr.setRequestHeader("token", "7b3c7ea0-0938-4231-a4f9-724d4fdbb475");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.send(data);
