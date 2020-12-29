package main

import (
  "fmt"
  "strings"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "https://api.nubox.com/Nubox.API/factura/1-9/1/productos"
  method := "POST"

  payload := strings.NewReader(`[
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
  ]`)

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("token", "f96321b5-4691-4f9a-b097-f34bcf500216")
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