var data = "\n\nhttps://api.nubox.com/Nubox.API/factura/documento/15478788-7/1/1/FAC/1-9/pdf";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api.nubox.com/Nubox.API/factura/documento/15478788-7/1/1/FAC/1-9/pdf");
xhr.setRequestHeader("token", "898e879d-ccba-40c4-898c-5d4a97f8ed9c");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.send(data);
