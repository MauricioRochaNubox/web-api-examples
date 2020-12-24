<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.nubox.com/Nubox.API/factura/documento/15478788-7/1/1000120/FAC/16910156-6/pdf",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_HTTPHEADER => array(
    "token: 68f3c9ef-e772-4001-9ee9-0eb371b4bdbd"
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
