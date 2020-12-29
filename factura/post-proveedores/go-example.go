package main

import (
  "fmt"
  "strings"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "https://api.nubox.com/Nubox.API/factura/1-9/1/proveedores"
  method := "POST"

  payload := strings.NewReader(`[
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
]`)

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("token", "9f83d9db-61f9-4da3-8b64-c1e0ac746946")
  req.Header.Add("Content-Type", "application/json")
  req.Header.Add("Cookie", ".Stackify.Rum=4c648f24-1d4f-4817-a602-57005e5e24da")

  res, err := client.Do(req)
  if err != nil {
    fmt.Println(err)
    return
  }
  defer res.Body.Close()

  body, err := ioutil.ReadAll(res.Body)
  if err != nil {
    fmt.Println(err)
    return
  }
  fmt.Println(string(body))
}