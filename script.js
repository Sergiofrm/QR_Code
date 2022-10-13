function GerarQRCode() {
  /* variavel de pegar e colar texto selecionado */
  var inputusuario = document.querySelector('textarea').value
  /* Códigos ; cht=qr&  TamanhoEtiqueta=chs=500x500 Oquevaiescolher&chl=  */
  var GoogleChartApi =
    'https://chart.googleapis.com/chart?cht=qr&chs=350x350&chld=H&chl='
  var conteudoQRCode = GoogleChartApi + encodeURIComponent(inputusuario)

  document.querySelector('#QRCodeImage').src = conteudoQRCode
}
