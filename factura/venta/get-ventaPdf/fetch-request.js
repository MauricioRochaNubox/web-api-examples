var myHeaders = new Headers();
myHeaders.append("token", "898e879d-ccba-40c4-898c-5d4a97f8ed9c");
myHeaders.append("Cookie", ".Stackify.Rum=4c648f24-1d4f-4817-a602-57005e5e24da");

var urlencoded = new URLSearchParams();

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

fetch("https://api.nubox.com/Nubox.API/factura/documento/15478788-7/1/1/FAC-EL/pdf", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));