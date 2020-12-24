OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://api.nubox.com/Nubox.API/factura/documento/15478788-7/1/1000120/FAC/16910156-6/pdf")
  .method("GET", null)
  .addHeader("token", "68f3c9ef-e772-4001-9ee9-0eb371b4bdbd")
  .build();
Response response = client.newCall(request).execute();
