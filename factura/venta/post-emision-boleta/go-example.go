package main

import (
  "fmt"
  "strings"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "https://api.nubox.com/Nubox.API/factura/documento/1-9/1/2-7/1/39/dte/extendido"
  method := "POST"

  payload := strings.NewReader(`{
    "productos": [
      {
        "fechaEmision": "2020-06-16T08:36:14.4221255-04:00",
        "folio": 5000,
        "rutContraparte": "11111111-1",
        "razonSocialContraparte": "venta23",
        "giroContraparte": "Servicios",
        "comunaContraparte": "Vitacura",
        "direccionContraparte": "Candelaria Goyenechea 3820, Vitacura",
        "emailContraparte": "mail@ejemplo.com",
        "codigoSucursal": "123",
        "secuencia": 1,
        "afecto": "SI",
        "producto": "Privado",
        "descripcion": "Servicio",
        "cantidad": 1,
        "precio": 150000,
        "valor": 150000,
        "codigoItem": "01",
        "unidadMedida": "UNID",
        "fechaVencimiento": "2020-06-16T08:36:14.4221255-04:00",
        "codigoSIITipoDeServicio": "1",
        "fechaPeriodoDesde": "2020-06-16T08:36:14.4221255-04:00",
        "fechaPeriodoHasta": "2020-06-16T08:36:14.4221255-04:00",
        "observacion": "Observación"
      }
    ],
    "documentoReferenciado": {
      "tipo": 0,
      "folio": 123456,
      "secuencia": 1,
      "tipoDocumentoReferenciado": 0,
      "folioDocumentoReferenciado": 654321,
      "fechaDocumentoReferenciado": "2020-06-16T08:36:14.4221255-04:00",
      "motivoReferencia": 1000,
      "glosa": "Glosa"
    }
  }`)

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("token", "11bfbe68-a682-4d7c-bb95-56f045f22933")
  req.Header.Add("Content-Type", "application/json")

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