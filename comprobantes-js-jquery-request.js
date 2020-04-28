var settings = {
  "url": "https://api.nubox.com/nubox.api/contabilidad/Partner API/1/comprobante",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "token": "a691c25b-d4b9-4c3b-ad8b-1d3114d0335b",
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({"Descripcion":"comprobante ingresado por partner","Periodo":"2020-04-15T15:23:22.9470207-04:00","NumeroAsiento":12,"FechaIngreso":"2020-04-15T15:23:22.9470207-04:00","ValorTotal":3000,"TipoAsiento":2,"EstadoAsiento":4,"MovimientosContables":[{"Descripcion":"desde API - debe","CodigoCuenta":"1101-02","EsDebito":true,"Valor":1500,"CodigoCentroDeCosto":"","CodigoSucursal":"","MovimientosAuxiliares":[],"MovimientosBancarios":[],"BoletasDeHonorarios":[]},{"Descripcion":"movimiento insertado desde API","CodigoCuenta":"1103-01","EsDebito":false,"Valor":1500,"CodigoCentroDeCosto":"","CodigoSucursal":"","MovimientosAuxiliares":[],"MovimientosBancarios":[{"EsDebito":false,"Fecha":"2020-04-15T15:41:50.8812359-04:00","Valor":1500,"Folio":123456,"TipoMovimientoBancario":"COBRO CHEQUE"}],"BoletasDeHonorarios":[]}]}),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
