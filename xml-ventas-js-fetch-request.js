var myHeaders = new Headers();
myHeaders.append("token", "d2f28227-bc22-4bd8-9cdc-c418c8197270");

var raw = "";

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://api.nubox.com/Nubox.API/factura/documento/15478788-7/venta/2020-01-02/33/0/1?token", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
