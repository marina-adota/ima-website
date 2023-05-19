function copyText() {

  // Pega o texto e coloca na área de transferência
  var text = document.getElementById('text-to-copy');
  var range = document.createRange();
  range.selectNode(text);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();

  // Pega o botão, troca as classes e seu texto
  var button = document.getElementById("btn-click-to-copy");
  button.classList.remove("btn-outline-primary");
  button.classList.add("btn-secondary");
  button.classList.add("text-white");
  var oldText = button.innerHTML;
  var newText = "Copiado !";
  button.innerHTML = newText;

  // Troca as classes e texto do botão novamente, após 2000 millisegundos
  setTimeout(function () {
    button.classList.remove("btn-secondary");
    button.classList.remove("text-white");
    button.classList.add("btn-outline-primary");
    button.innerHTML = oldText;
  }, 2000);
}