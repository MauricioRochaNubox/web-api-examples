curl --location --request POST 'https://api.nubox.com/nubox.api/compra' \
--header 'token: aaf102b1-77ac-4f69-b833-122c478f15d3' \
--header 'Content-Type: application/json' \
--data-raw '
{
  "NumeroSerie": 1,
  "Rut": "7964492-7",
  "RazonSocialProveedor": "Beta API",
  "CodigoSIITipoDoc": 33,
  "Folio": 12,
  "Fecha": "2020-04-14T00:00:00.000Z",
  "FechaVencimiento": "2020-05-14T00:00:00.000Z",
  "RutEmisor": "16197839-6",
  "MontoExento": 0,
  "MontoNeto":34440,
  "MontoIva": 6544,
  "MontoTotal": 40984,
  "Glosa": null,
  "MontoIvaNoRetenido": 0,
  "IVAUsoComun": 0,
  "Periodo": 4,
  "Anno": 2020,
  "TotalLey18211": 0,
  "TipoTransaccionCompra": null,
  "NetoActivoFijo": 0,
  "IvaActivoFijo": 0
}
'