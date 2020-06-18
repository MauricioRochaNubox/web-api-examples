var data = "";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api.nubox.com/Nubox.API/factura/documento/15478788-7/venta/2020-01-02/33/0/1?token");
xhr.setRequestHeader("token", "d2f28227-bc22-4bd8-9cdc-c418c8197270");

xhr.send(data);
