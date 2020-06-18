var data = "";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api.nubox.com/Nubox.API.cert/factura/documento/15478788-7/venta/2020-01-02/33/0/1");
xhr.setRequestHeader("token", "898e879d-ccba-40c4-898c-5d4a97f8ed9c");

xhr.send(data);
