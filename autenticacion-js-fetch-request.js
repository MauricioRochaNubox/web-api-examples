var myHeaders = new Headers();
myHeaders.append("Authorization", "Basic aWM3cFJISjFOUHJkOkZudldRc2VB");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.nubox.com/nubox.api/autenticar", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
