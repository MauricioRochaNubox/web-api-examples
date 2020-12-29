<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.nubox.com/Nubox.API/factura/1-9/1/proveedores',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'[
{
    "Rut": "7809318-8",
    "RazonSocial": "Juan Proveedor",
    "Giro": "EMPRESA DE SERVICIOS",
    "Acteco": "ACTIVIDADES DE ASESORAMIENTO EMPRESARIAL Y EN MATERIA DE GESTION",
    "DireccionLegal": "Orinoco 90",
    "ComunaLegalNombre": "Las Condes",
    "Contacto": "Juan Contador",
    "Email": "juan.contador@ejemplo.com",
    "seEnviaPDF": 1
  }
]',
  CURLOPT_HTTPHEADER => array(
    'token: 9f83d9db-61f9-4da3-8b64-c1e0ac746946',
    'Content-Type: application/json',
    'Cookie: .Stackify.Rum=4c648f24-1d4f-4817-a602-57005e5e24da'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
