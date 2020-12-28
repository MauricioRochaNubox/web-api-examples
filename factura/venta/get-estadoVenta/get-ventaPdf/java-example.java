OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://api.nubox.com/Nubox.API.cert/factura/documento/15478788-7/1/1/FAC-EL/pdf")
  .method("GET", null)
  .addHeader("token", "898e879d-ccba-40c4-898c-5d4a97f8ed9c")
  .addHeader("Cookie", ".Stackify.Rum=f0af7579-7902-4bd2-b8e9-2fd72872bd71")
  .build();
Response response = client.newCall(request).execute();