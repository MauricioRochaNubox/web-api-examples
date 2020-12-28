<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.nubox.com/nubox.api/Pago/',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'{
  "NumeroSerie": 1,
  "RutContraparteEmisor": "16197839-6",
  "RutEmpresaReceptor": "7964492-7",
  "CodigoMedioDePago": "EFECTIVO",
  "Fecha": "2020-04-14",
  "MontoTotal": 40984,
  "DetalleDocumentos": [
    {
      "Folio": 12,
      "CodigoSIITipoDoc": 33,
      "Monto": 40984
    }
  ]
}
',
  CURLOPT_HTTPHEADER => array(
    'PartnerKey: eYP4xLMXBxqusvRz22L0dTNk',
    'token: aaf102b1-77ac-4f69-b833-122c478f15d3',
    'Content-Type: application/json',
    'Cookie: .Stackify.Rum=4c648f24-1d4f-4817-a602-57005e5e24da'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
