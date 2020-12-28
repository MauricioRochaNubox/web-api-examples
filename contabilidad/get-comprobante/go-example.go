package main

import (
  "fmt"
  "strings"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "https://api.nubox.com/nubox.api/contabilidad/Partner%20API/1/comprobante"
  method := "POST"

  payload := strings.NewReader(`{
    "Descripcion": "comprobante ingresado por partner",
    "Periodo": "2020-04-15T15:23:22.9470207-04:00",
    "NumeroAsiento": 12,
    "FechaIngreso": "2020-04-15T15:23:22.9470207-04:00",
    "ValorTotal": 3000,
    "TipoAsiento": 2,
    "EstadoAsiento": 4,
    "MovimientosContables": [
      {
        "Descripcion": "desde API - debe",
        "CodigoCuenta": "1101-02",
        "EsDebito": true,
        "Valor": 1500,
        "CodigoCentroDeCosto": "",
        "CodigoSucursal": "",
        "MovimientosAuxiliares": [],
        "MovimientosBancarios": [],
        "BoletasDeHonorarios": []
      },
      {
        "Descripcion": "movimiento insertado desde API",
        "CodigoCuenta": "1103-01",
        "EsDebito": false,
        "Valor": 1500,
        "CodigoCentroDeCosto": "",
        "CodigoSucursal": "",
        "MovimientosAuxiliares": [],
        "MovimientosBancarios": [
        	{
            "EsDebito": false,
            "Fecha": "2020-04-15T15:41:50.8812359-04:00",
            "Valor": 1500,
            "Folio": 123456,
            "TipoMovimientoBancario": "COBRO CHEQUE"
        	}
        ],
        "BoletasDeHonorarios": []
      }
    ]
  }`)

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("token", "a691c25b-d4b9-4c3b-ad8b-1d3114d0335b")
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