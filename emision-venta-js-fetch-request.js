var myHeaders = new Headers();
myHeaders.append("token", "d8d35079-3fe4-48bd-8b02-de05030a25d3");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"productos":[{"rutContraparte":"6606048-9","razonSocialContraparte":"El Gran Solar","giroContraparte":"Servicios","tipo":33,"folio":1,"secuencia":1,"fecha":"2020-06-16T08:36:14.4104329-04:00","afecto":"SI","producto":"producto de ejemplo","descripcion":null,"cantidad":1,"comunaContraparte":"","direccionContraparte":"Av Vitacura 3110","precio":70000,"valor":0,"ponderacionDescuento":0,"emailContraparte":"mail@ejemplo.com","tipoDeServicio":"","fechaPeriodoDesde":"","fechaPeriodoHasta":"","fechaVencimiento":"","codigoSucursal":"Cod 0001","vendedor":"Pedro Sanchez","codigoItem":"01","unidadMedida":"UNID","codigoIMP":"","montoIMP":0,"indicadorDeTraslado":"1","formaDePago":"1","medioDePago":"EF","terminosDePagoDias":"","terminosDePagoCodigo":"","comunaDestino":"Santiago","rutSolicitanteFactura":"9663691-1","productoCambioSujeto":"","cantidadMontoCambioSujeto":0,"tipoGlobalAfecto":"","valorGlobalAfecto":0,"tipoGlobalExento":"","valorGlobalExento":0,"precioCambioSujeto":0,"descuentoMonto":0,"rutTransportista":"14183701-k","rutChofer":"14183701-k","patente":"SVFV02","nombreChofer":"Juan Pereira","direccionDestino":"Santa Rosa 215","ciudadDestino":"Santiago","tipoDeDespacho":"","nombreDeContacto":"Lorena Álvarez","observacion":"Observación."}],"documentoReferenciado":{"tipo":0,"folio":2343,"secuencia":0,"tipoDocumentoReferenciado":0,"folioDocumentoReferenciado":34,"fechaDocumentoReferenciado":"2020-06-16T08:36:14.4104329-04:00","motivoReferencia":0,"glosa":"Glosa"}});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://api.nubox.com/Nubox.API/factura/documento/15478788-7/1/13954729-2/1/emitir/ventaExtendido", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
