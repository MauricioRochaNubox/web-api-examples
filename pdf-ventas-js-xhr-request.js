var data = "";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api.nubox.com/Nubox.API/factura/documento/15478788-7/1/1/FAC/pdf");
xhr.setRequestHeader("token", "898e879d-ccba-40c4-898c-5d4a97f8ed9c");

xhr.send(data);
