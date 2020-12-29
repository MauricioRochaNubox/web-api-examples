package main

import (
  "fmt"
  "strings"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "https://api.nubox.com/Nubox.API/factura/1-9/1/sucursales"
  method := "POST"

  payload := strings.NewReader(`[
    {
      "CodigoSII": 1,
      "DireccionLegal": "Av. Apoquindo 102",
      "ComunaLegalId": 473,
      "Activa": true,
      "Codigo": "Codigo 1",
      "Descripcion": "Sucursal Apoquindo"
    },
    {
      "CodigoSII": 2,
      "DireccionLegal": "Av. Vitacura 2236",
      "ComunaLegalId": 473,
      "Activa": true,
      "Codigo": "Codigo 2",
      "Descripcion": "Sucursal Vitacura"
    }
  ]`)

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("token", "37998f88-7701-4c3b-9d2f-3fee2e53aebc")
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