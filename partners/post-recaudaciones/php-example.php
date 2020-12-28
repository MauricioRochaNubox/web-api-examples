<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.nubox.com/nubox.api/Recaudacion',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'{
  "NumeroSerie": 1, 	 
  "RutContraparteReceptor":"16197839-6",
  "RutEmpresaEmisor": "827-3",
  "CodigoMedioDePago": "VALEVISTA",
  "Fecha": "2020-05-01",
  "MontoTotal": 408553,
  "DetalleDocumentos": [
    {
      "Folio": 1002,
      "CodigoSIITipoDoc": 33,
      "Monto": 408553
    }
  ]
}',
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
