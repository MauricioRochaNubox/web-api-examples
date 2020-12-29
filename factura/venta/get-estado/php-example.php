<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.nubox.com/Nubox.API/factura/documento/1-9/estadoventa/468/FAC-EL/1",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_HTTPHEADER => array(
    "token: dd380573-3dac-41c1-bbed-8c954f743ff8",
    "Cookie: .Stackify.Rum=f0af7579-7902-4bd2-b8e9-2fd72872bd71"
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
