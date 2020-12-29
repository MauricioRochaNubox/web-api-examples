package main

import (
  "fmt"
  "strings"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "https://api.nubox.com/Nubox.API/factura/1-9/1/clientes"
  method := "POST"

  payload := strings.NewReader(`[
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
]`)

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("token", "74d69e7e-8596-4ac6-8430-ed3c5da83bed")
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