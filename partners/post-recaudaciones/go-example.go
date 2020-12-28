package main

import (
  "fmt"
  "strings"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "https://api.nubox.com/nubox.api/Recaudacion"
  method := "POST"

  payload := strings.NewReader(`{`+"
"+`
  "NumeroSerie": 1, 	 `+"
"+`
  "RutContraparteReceptor":"16197839-6",`+"
"+`
  "RutEmpresaEmisor": "827-3",`+"
"+`
  "CodigoMedioDePago": "VALEVISTA",`+"
"+`
  "Fecha": "2020-05-01",`+"
"+`
  "MontoTotal": 408553,`+"
"+`
  "DetalleDocumentos": [`+"
"+`
    {`+"
"+`
      "Folio": 1002,`+"
"+`
      "CodigoSIITipoDoc": 33,`+"
"+`
      "Monto": 408553`+"
"+`
    }`+"
"+`
  ]`+"
"+`
}`)

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("PartnerKey", "eYP4xLMXBxqusvRz22L0dTNk")
  req.Header.Add("token", "d5e7487e-2e7c-4088-9c78-efaf28946ac7")
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