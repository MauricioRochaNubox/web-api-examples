<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.nubox.com/nubox.api/venta',
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
  "Rut": "827-3",
  "Folio":1002,
  "CodigoTipoDocumento": 33,
  "FechaEmision": "2020-05-01T00:00:00.000Z",
  "MontoNeto":343330,
  "MontoExento": 0,
  "MontoIva":65223,
  "MontoTotal": 408553,
  "Contraparte": {
    "Rut": "16197839-6",
    "RazonSocial": "Beta API",
    "ComunaId": 644
  }
}

',
  CURLOPT_HTTPHEADER => array(
    'PartnerKey: eYP4xLMXBxqusvRz22L0dTNk',
    'token: d5e7487e-2e7c-4088-9c78-efaf28946ac7',
    'Content-Type: application/json',
    'Cookie: .Stackify.Rum=4c648f24-1d4f-4817-a602-57005e5e24da'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
