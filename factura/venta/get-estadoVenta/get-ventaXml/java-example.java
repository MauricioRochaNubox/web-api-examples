OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://api.nubox.com/Nubox.API.Cert/factura/documento/15478788-7/venta/2020-06-22/FAC-EL/9/1")
  .method("GET", null)
  .addHeader("token", "9df9b12c-c33a-42ab-bfae-1e4b3abb16cc")
  .addHeader("Cookie", ".Stackify.Rum=f0af7579-7902-4bd2-b8e9-2fd72872bd71")
  .build();
Response response = client.newCall(request).execute();