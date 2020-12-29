var myHeaders = new Headers();
myHeaders.append("token", "9df9b12c-c33a-42ab-bfae-1e4b3abb16cc");
myHeaders.append("Cookie", ".Stackify.Rum=4c648f24-1d4f-4817-a602-57005e5e24da");

var raw = "";

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://api.nubox.com/Nubox.API/factura/documento/15478788-7/venta/2020-06-22/FAC-EL/9/1", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));