package main

import (
  "fmt"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "https://api.nubox.com/nubox.api/autenticar"
  method := "POST"

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, nil)

  if err != nil {
    fmt.Println(err)
  }
  req.Header.Add("Authorization", "Basic aWM3cFJISjFOUHJkOkZudldRc2VB")

  res, err := client.Do(req)
  defer res.Body.Close()
  body, err := ioutil.ReadAll(res.Body)

  fmt.Println(string(body))
}
