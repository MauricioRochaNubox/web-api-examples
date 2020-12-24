OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "\r\n{\r\n  \"NumeroSerie\": 1,\r\n  \"Rut\": \"7964492-7\",\r\n  \"RazonSocialProveedor\": \"Beta API\",\r\n  \"CodigoSIITipoDoc\": 33,\r\n  \"Folio\": 12,\r\n  \"Fecha\": \"2020-04-14T00:00:00.000Z\",\r\n  \"FechaVencimiento\": \"2020-05-14T00:00:00.000Z\",\r\n  \"RutEmisor\": \"16197839-6\",\r\n  \"MontoExento\": 0,\r\n  \"MontoNeto\":34440,\r\n  \"MontoIva\": 6544,\r\n  \"MontoTotal\": 40984,\r\n  \"Glosa\": null,\r\n  \"MontoIvaNoRetenido\": 0,\r\n  \"IVAUsoComun\": 0,\r\n  \"Periodo\": 4,\r\n  \"Anno\": 2020,\r\n  \"TotalLey18211\": 0,\r\n  \"TipoTransaccionCompra\": null,\r\n  \"NetoActivoFijo\": 0,\r\n  \"IvaActivoFijo\": 0\r\n}\r\n");
Request request = new Request.Builder()
  .url("https://api.nubox.com/nubox.api/compra")
  .method("POST", body)
  .addHeader("token", "aaf102b1-77ac-4f69-b833-122c478f15d3")
  .addHeader("Content-Type", "application/json")
  .build();
Response response = client.newCall(request).execute();