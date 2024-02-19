function changeBackgroundColor() {
    // Генеруємо випадковий колір для бекграунду
    var randomColor = getRandomColor();

    // Змінюємо колір бекграунду
    document.body.style.backgroundColor = randomColor;
}

function getRandomColor() {
    // Генеруємо три випадкових компоненти кольору (R, G, B)
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
