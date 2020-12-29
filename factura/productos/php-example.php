<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.nubox.com/Nubox.API/factura/1-9/1/productos',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'[
    {
      "Codigo": "PR0001",
      "Nombre": "Nombre Producto 1",
      "Descripcion": "Descripción Producto 1",
      "Cantidad": 20,
      "Precio": 15000,
      "Inventariable": true
    },
    {
      "Codigo": "PR0002",
      "Nombre": "Nombre Producto 2",
      "Descripcion": "Descripción Producto 2",
      "Cantidad": 15,
      "Precio": 23000,
      "Inventariable": false
    }
  ]',
  CURLOPT_HTTPHEADER => array(
    'token: f96321b5-4691-4f9a-b097-f34bcf500216',
    'Content-Type: application/json',
    'Cookie: .Stackify.Rum=4c648f24-1d4f-4817-a602-57005e5e24da'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
