var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api.nubox.com/Nubox.API/factura/documento/1-9/estadoventa/468/FAC-EL/1");
xhr.setRequestHeader("token", "612528bc-6b02-4ffc-8203-f4d36fd78c29");

xhr.send();
