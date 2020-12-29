package main

import (
  "fmt"
  "strings"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "https://api.nubox.com/Nubox.API/factura/documento/1-9/estadoventa/468/FAC-EL/1"
  method := "GET"

  payload := strings.NewReader("")

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
  }
  req.Header.Add("token", "dd380573-3dac-41c1-bbed-8c954f743ff8")
  req.Header.Add("Cookie", ".Stackify.Rum=f0af7579-7902-4bd2-b8e9-2fd72872bd71")

  res, err := client.Do(req)
  defer res.Body.Close()
  body, err := ioutil.ReadAll(res.Body)

  fmt.Println(string(body))
}