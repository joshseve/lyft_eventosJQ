// Transicion del index al home.
var cambioPagina = function () {
  setTimeout(function () {
      location.href="views/home.html"
  },3000)
};


// Cargar hasta que este listo todo el documento.
$(document).ready(cambioPagina);
