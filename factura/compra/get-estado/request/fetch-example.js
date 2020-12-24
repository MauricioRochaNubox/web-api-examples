var myHeaders = new Headers();
myHeaders.append("token", "ab016ed6-1d8a-40c9-9eb8-418fbcb47c1a");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.nubox.com/Nubox.API/factura/documento/1-9/estadocompra/0/FAC/1/2-7", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
