var titles = [
  "Adoção de cachorros em Salvador",
  "Cada animal tem uma história,<br>ajude a escrever um final feliz",
  "Adote, salve uma vida e ganhe um amigo fiel",
  "Adote amor, salve vidas",
  "Com amor e cuidado, transformamos a vida de animais abandonados",
  "Nossa missão é proteger e cuidar dos animais, um de cada vez"
];
var currentIndex = 0;
var transitionInterval = 6000; // Intervalo de tempo desejado entre as transições (em milissegundos)

function changeTitle(elementIds) {
  elementIds.forEach(function (elementId) {
    var titleElement = document.getElementById(elementId);

    titleElement.style.opacity = 0;

    setTimeout(function () {
      titleElement.innerHTML = titles[currentIndex];

      titleElement.style.opacity = 1;

      currentIndex = (currentIndex + 1) % titles.length;
    }, 700);
  });

  setTimeout(function () {
    changeTitle(elementIds);
  }, transitionInterval);
}

changeTitle(["title", "lastMessage"]);

