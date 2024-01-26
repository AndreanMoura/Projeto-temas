function togglemode() {
  const html = document.documentElement

  html.classList.toggle("light")

  //Pegar a tag img

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "/assets/Andrean-dia.png")
  } else {
    img.setAttribute("src", "./assets/Moura(IA) nt.png")
  }
}
//if(html.classList.contains('light')){
// html.classList.remove('light')
//} else{
//html.classList.add('light')
//}
// corrigir os modelos de imgs dentro das condiçoes do js
