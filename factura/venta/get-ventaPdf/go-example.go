package main

import (
  "fmt"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "https://api.nubox.com/Nubox.API/factura/documento/15478788-7/1/1/FAC-EL/pdf"
  method := "GET"

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, nil)

  if err != nil {
    fmt.Println(err)
  }
  req.Header.Add("token", "898e879d-ccba-40c4-898c-5d4a97f8ed9c")
  req.Header.Add("Cookie", ".Stackify.Rum=f0af7579-7902-4bd2-b8e9-2fd72872bd71")

  res, err := client.Do(req)
  defer res.Body.Close()
  body, err := ioutil.ReadAll(res.Body)

  fmt.Println(string(body))
}