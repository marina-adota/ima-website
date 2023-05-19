var titles = [
    "Cada animal tem uma história,<br>ajude a escrever um final feliz",
    "Adote, salve uma vida e ganhe um amigo fiel.", 
    "Com amor e cuidado, transformamos a vida de animais abandonados.", 
    "Nossa missão é proteger e cuidar dos animais, um de cada vez."
]; // Lista de títulos para o slide
var currentIndex = 0; // Índice do título atual

function changeTitle() {
    var titleElement = document.getElementById("title");

    titleElement.style.opacity = 0; // Define a opacidade para 0 (tornando o título invisível)

    setTimeout(function () {
        titleElement.innerHTML = titles[currentIndex]; // Atualiza o conteúdo do título

        titleElement.style.opacity = 1; // Define a opacidade de volta para 1 (tornando o título visível)

        currentIndex = (currentIndex + 1) % titles.length; // Avança para o próximo título

        setTimeout(changeTitle, 6000);
    }, 700);
}

// Inicia o slide do título
changeTitle();