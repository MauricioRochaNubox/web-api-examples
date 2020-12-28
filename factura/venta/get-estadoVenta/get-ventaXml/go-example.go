package main

import (
  "fmt"
  "strings"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "https://api.nubox.com/Nubox.API.Cert/factura/documento/15478788-7/venta/2020-06-22/FAC-EL/9/1"
  method := "GET"

  payload := strings.NewReader("")

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
  }
  req.Header.Add("token", "9df9b12c-c33a-42ab-bfae-1e4b3abb16cc")
  req.Header.Add("Cookie", ".Stackify.Rum=f0af7579-7902-4bd2-b8e9-2fd72872bd71")

  res, err := client.Do(req)
  defer res.Body.Close()
  body, err := ioutil.ReadAll(res.Body)

  fmt.Println(string(body))
}