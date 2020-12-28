<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.nubox.com/Nubox.API/factura/documento/15478788-7/1/rutFuncionario/1/emitir/ventaExtendido?rutFuncionario=13954729-2&emitir=true',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'{
    "productos": [
      {
        "rutContraparte": "11111111-1",
        "razonSocialContraparte": "venta23",
        "giroContraparte": "venta23",
        "tipo": 33,
        "folio": 1600,
        "secuencia": 1,
        "fecha": "2020-06-22T00:00:00.8751996-04:00",
        "afecto": "SI",
        "producto": "producto de ejemplo",
        "descripcion": null,
        "cantidad": 1,
        "comunaContraparte": "Las Condes",
        "direccionContraparte": "Av Vitacura 3110",
        "precio": 70000,
        "valor": 70000,
        "ponderacionDescuento": 0,
        "emailContraparte": "mail@ejemplo.com",
        "tipoDeServicio": "",
        "fechaPeriodoDesde": "",
        "fechaPeriodoHasta": "",
        "fechaVencimiento": "",
        "codigoSucursal": "Cod 0001",
        "vendedor": "Pedro Sanchez",
        "codigoItem": "01",
        "unidadMedida": "UNID",
        "codigoIMP": "",
        "montoIMP": 0,
        "indicadorDeTraslado": "1",
        "formaDePago": "1",
        "medioDePago": "EF",
        "terminosDePagoDias": "",
        "terminosDePagoCodigo": "",
        "comunaDestino": "Santiago",
        "rutSolicitanteFactura": "9663691-1",
        "productoCambioSujeto": "",
        "cantidadMontoCambioSujeto": 0,
        "tipoGlobalAfecto": "",
        "valorGlobalAfecto": 0,
        "tipoGlobalExento": "",
        "valorGlobalExento": 0,
        "precioCambioSujeto": 0,
        "descuentoMonto": 0,
        "rutTransportista": "14183701-k",
        "rutChofer": "14183701-k",
        "patente": "SVFV02",
        "nombreChofer": "Juan Pereira",
        "direccionDestino": "Santa Rosa 215",
        "ciudadDestino": "Santiago",
        "tipoDeDespacho": "",
        "nombreDeContacto": "Lorena Álvarez",
        "observacion": "Observación."
      }
    ],
    "documentoReferenciado": {
      "tipo": 0,
      "folio": 2343,
      "secuencia": 0,
      "tipoDocumentoReferenciado": 0,
      "folioDocumentoReferenciado": 34,
      "fechaDocumentoReferenciado": "2020-06-22T15:31:10.8751996-04:00",
      "motivoReferencia": 0,
      "glosa": "Glosa"
    }
  }',
  CURLOPT_HTTPHEADER => array(
    'token: f49ddf96-fdb5-4394-8cbd-0b6229dde981',
    'Content-Type: application/json',
    'Cookie: .Stackify.Rum=4c648f24-1d4f-4817-a602-57005e5e24da'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
