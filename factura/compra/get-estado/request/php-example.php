<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.nubox.com/Nubox.API/factura/documento/1-9/estadocompra/0/FAC/1/2-7',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
  CURLOPT_HTTPHEADER => array(
    'token: ab016ed6-1d8a-40c9-9eb8-418fbcb47c1a'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
