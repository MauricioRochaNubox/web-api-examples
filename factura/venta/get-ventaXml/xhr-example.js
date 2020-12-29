var data = "";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api.nubox.com/Nubox.API/factura/documento/15478788-7/venta/2020-06-22/FAC-EL/9/1");
xhr.setRequestHeader("token", "9df9b12c-c33a-42ab-bfae-1e4b3abb16cc");
xhr.setRequestHeader("Cookie", ".Stackify.Rum=4c648f24-1d4f-4817-a602-57005e5e24da");

xhr.send(data);