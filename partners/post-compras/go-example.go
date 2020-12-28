package main

import (
  "fmt"
  "strings"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "https://api.nubox.com/nubox.api/compra"
  method := "POST"

  payload := strings.NewReader(``+"
"+`
{`+"
"+`
  "NumeroSerie": 1,`+"
"+`
  "Rut": "7964492-7",`+"
"+`
  "RazonSocialProveedor": "Beta API",`+"
"+`
  "CodigoSIITipoDoc": 33,`+"
"+`
  "Folio": 12,`+"
"+`
  "Fecha": "2020-04-14T00:00:00.000Z",`+"
"+`
  "FechaVencimiento": "2020-05-14T00:00:00.000Z",`+"
"+`
  "RutEmisor": "16197839-6",`+"
"+`
  "MontoExento": 0,`+"
"+`
  "MontoNeto":34440,`+"
"+`
  "MontoIva": 6544,`+"
"+`
  "MontoTotal": 40984,`+"
"+`
  "Glosa": null,`+"
"+`
  "MontoIvaNoRetenido": 0,`+"
"+`
  "IVAUsoComun": 0,`+"
"+`
  "Periodo": 4,`+"
"+`
  "Anno": 2020,`+"
"+`
  "TotalLey18211": 0,`+"
"+`
  "TipoTransaccionCompra": null,`+"
"+`
  "NetoActivoFijo": 0,`+"
"+`
  "IvaActivoFijo": 0`+"
"+`
}`+"
"+`
`)

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("PartnerKey", "eYP4xLMXBxqusvRz22L0dTNk")
  req.Header.Add("token", "aaf102b1-77ac-4f69-b833-122c478f15d3")
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