var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api.nubox.com/Nubox.API/factura/documento/1-9/estadocompra/0/FAC/1/2-7");

xhr.setRequestHeader("token", "ab016ed6-1d8a-40c9-9eb8-418fbcb47c1a");
xhr.send();
