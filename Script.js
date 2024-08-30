function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
 
  //substituir a imagem
  if(html.classList.contains('light')) {
    // Se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto de Lucas sorrindo, usando ocúlos")
 } else{
  // Se tiver sem light mode, manter a imagem normal
 img.setAttribute('src', './assets/avatar2.png')
 img.setAttribute(
   "alt",
   'Foto de Lucas sorrindo, olhando pro lado, usando ocúlos'
 )
 }
}