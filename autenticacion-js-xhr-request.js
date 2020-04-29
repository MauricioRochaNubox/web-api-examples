
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://api.nubox.com/nubox.api/autenticar");
xhr.setRequestHeader("Authorization", "Basic aWM3cFJISjFOUHJkOkZudldRc2VB");

xhr.send();
