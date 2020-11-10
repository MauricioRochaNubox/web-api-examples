OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "");
Request request = new Request.Builder()
  .url("https://api.nubox.com/nubox.api/autenticar")
  .method("POST", body)
  .addHeader("Authorization", "Basic RjJPdzB6UURnUHJkOjRGVHVLZEt2")
  .build();
Response response = client.newCall(request).execute();
