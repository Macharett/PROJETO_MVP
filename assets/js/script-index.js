// script.js

let currentIndex = 0;

function moveLeft() {
    const carrossel = document.querySelector('.carrossel');
    const totalItems = document.querySelectorAll('.carrossel-publicacao').length;

    // Calcula o próximo índice
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - 5; // Volta ao final se estiver no começo
    }

    // Move o carrossel
    const newTransform = `translateX(-${currentIndex * 20}%)`;
    carrossel.style.transform = newTransform;
}

function moveRight() {
    const carrossel = document.querySelector('.carrossel');
    const totalItems = document.querySelectorAll('.carrossel-publicacao').length;

    // Calcula o próximo índice
    if (currentIndex < totalItems - 5) {
        currentIndex++;
    } else {
        currentIndex = 0; // Volta ao início se estiver no final
    }

    // Move o carrossel
    const newTransform = `translateX(-${currentIndex * 20}%)`;
    carrossel.style.transform = newTransform;
}
