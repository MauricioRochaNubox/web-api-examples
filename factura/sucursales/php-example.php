<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.nubox.com/Nubox.API/factura/1-9/1/sucursales',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'[
    {
      "CodigoSII": 1,
      "DireccionLegal": "Av. Apoquindo 102",
      "ComunaLegalId": 473,
      "Activa": true,
      "Codigo": "Codigo 1",
      "Descripcion": "Sucursal Apoquindo"
    },
    {
      "CodigoSII": 2,
      "DireccionLegal": "Av. Vitacura 2236",
      "ComunaLegalId": 473,
      "Activa": true,
      "Codigo": "Codigo 2",
      "Descripcion": "Sucursal Vitacura"
    }
  ]',
  CURLOPT_HTTPHEADER => array(
    'token: 37998f88-7701-4c3b-9d2f-3fee2e53aebc',
    'Content-Type: application/json',
    'Cookie: .Stackify.Rum=4c648f24-1d4f-4817-a602-57005e5e24da'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
