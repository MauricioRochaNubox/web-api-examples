var myHeaders = new Headers();
myHeaders.append("token", "612528bc-6b02-4ffc-8203-f4d36fd78c29");
myHeaders.append("Cookie", ".Stackify.Rum=4c648f24-1d4f-4817-a602-57005e5e24da");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.nubox.com/Nubox.API/factura/documento/1-9/estadoventa/468/FAC-EL/1", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));