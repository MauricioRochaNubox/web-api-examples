<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.nubox.com/nubox.api/contabilidad/Partner%20API/1/comprobante',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'{
    "Descripcion": "comprobante ingresado por partner",
    "Periodo": "2020-04-15T15:23:22.9470207-04:00",
    "NumeroAsiento": 12,
    "FechaIngreso": "2020-04-15T15:23:22.9470207-04:00",
    "ValorTotal": 3000,
    "TipoAsiento": 2,
    "EstadoAsiento": 4,
    "MovimientosContables": [
      {
        "Descripcion": "desde API - debe",
        "CodigoCuenta": "1101-02",
        "EsDebito": true,
        "Valor": 1500,
        "CodigoCentroDeCosto": "",
        "CodigoSucursal": "",
        "MovimientosAuxiliares": [],
        "MovimientosBancarios": [],
        "BoletasDeHonorarios": []
      },
      {
        "Descripcion": "movimiento insertado desde API",
        "CodigoCuenta": "1103-01",
        "EsDebito": false,
        "Valor": 1500,
        "CodigoCentroDeCosto": "",
        "CodigoSucursal": "",
        "MovimientosAuxiliares": [],
        "MovimientosBancarios": [
        	{
            "EsDebito": false,
            "Fecha": "2020-04-15T15:41:50.8812359-04:00",
            "Valor": 1500,
            "Folio": 123456,
            "TipoMovimientoBancario": "COBRO CHEQUE"
        	}
        ],
        "BoletasDeHonorarios": []
      }
    ]
  }',
  CURLOPT_HTTPHEADER => array(
    'token: a691c25b-d4b9-4c3b-ad8b-1d3114d0335b',
    'Content-Type: application/json',
    'Cookie: .Stackify.Rum=4c648f24-1d4f-4817-a602-57005e5e24da'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
