var myHeaders = new Headers();
myHeaders.append("token", "8b47950f-42cf-4ecd-9a9c-4bbcc86a86d2");
myHeaders.append("Cookie", ".Stackify.Rum=4c648f24-1d4f-4817-a602-57005e5e24da");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.nubox.com/Nubox.API/factura/comunas", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));