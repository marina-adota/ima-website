function copiar() {
  var copiado = document.getElementById("idtextToCopy").h6;
  if (navigator.clipboard.writeText(copiado)) {
    document.getElementById("idbotao").textContent = "Copiado";
  }

  setInterval(function () {
    document.getElementById("idbotao").textContent = "Copiar";
  }, 2000
  );

  console.log(copiado);
}

