<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.nubox.com/nubox.api/compra',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'
{
  "NumeroSerie": 1,
  "Rut": "7964492-7",
  "RazonSocialProveedor": "Beta API",
  "CodigoSIITipoDoc": 33,
  "Folio": 12,
  "Fecha": "2020-04-14T00:00:00.000Z",
  "FechaVencimiento": "2020-05-14T00:00:00.000Z",
  "RutEmisor": "16197839-6",
  "MontoExento": 0,
  "MontoNeto":34440,
  "MontoIva": 6544,
  "MontoTotal": 40984,
  "Glosa": null,
  "MontoIvaNoRetenido": 0,
  "IVAUsoComun": 0,
  "Periodo": 4,
  "Anno": 2020,
  "TotalLey18211": 0,
  "TipoTransaccionCompra": null,
  "NetoActivoFijo": 0,
  "IvaActivoFijo": 0
}
',
  CURLOPT_HTTPHEADER => array(
    'token: aaf102b1-77ac-4f69-b833-122c478f15d3',
    'Content-Type: application/json'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
