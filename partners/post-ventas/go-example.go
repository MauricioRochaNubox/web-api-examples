package main

import (
  "fmt"
  "strings"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "https://api.nubox.com/nubox.api/venta"
  method := "POST"

  payload := strings.NewReader(``+"
"+`
{`+"
"+`
  "NumeroSerie": 1,`+"
"+`
  "Rut": "827-3",`+"
"+`
  "Folio":1002,`+"
"+`
  "CodigoTipoDocumento": 33,`+"
"+`
  "FechaEmision": "2020-05-01T00:00:00.000Z",`+"
"+`
  "MontoNeto":343330,`+"
"+`
  "MontoExento": 0,`+"
"+`
  "MontoIva":65223,`+"
"+`
  "MontoTotal": 408553,`+"
"+`
  "Contraparte": {`+"
"+`
    "Rut": "16197839-6",`+"
"+`
    "RazonSocial": "Beta API",`+"
"+`
    "ComunaId": 644`+"
"+`
  }`+"
"+`
}`+"
"+`
`+"
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