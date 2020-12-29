<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.nubox.com/Nubox.API/factura/1-9/1/clientes',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'[
  {
    "Rut": "2-7",
    "RazonSocial": "Juan Cliente",
    "Giro": "EMPRESA DE SERVICIOS DE INFORMATICA",
    "Acteco": "ACTIVIDADES DE ASESORAMIENTO EMPRESARIAL Y EN MATERIA DE GESTION",
    "DireccionLegal": "Orinoco 90",
    "ComunaLegalNombre": "Las Condes",
    "Contacto": "Juan Contador",
    "Email": "juan.contador@ejemplo.com",
    "seEnviaPDF": 1
  }
]',
  CURLOPT_HTTPHEADER => array(
    'token: 74d69e7e-8596-4ac6-8430-ed3c5da83bed',
    'Content-Type: application/json',
    'Cookie: .Stackify.Rum=4c648f24-1d4f-4817-a602-57005e5e24da'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
