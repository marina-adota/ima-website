function copyText() {
  var text = document.getElementById('text-to-copy');
  var range = document.createRange();
  range.selectNode(text);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();

  var button = document.getElementById("btn-click-to-copy");
  var oldText = button.innerHTML;
  var newText = "Copiado !";
  button.innerHTML = newText;

  setTimeout(function() {
    button.innerHTML = oldText;
  }, 2000);
}