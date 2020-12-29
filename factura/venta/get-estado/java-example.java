OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://api.nubox.com/Nubox.API/factura/documento/1-9/estadoventa/468/FAC-EL/1")
  .method("GET", null)
  .addHeader("token", "dd380573-3dac-41c1-bbed-8c954f743ff8")
  .addHeader("Cookie", ".Stackify.Rum=f0af7579-7902-4bd2-b8e9-2fd72872bd71")
  .build();
Response response = client.newCall(request).execute();