let currentIndex = [0, 0, 0]; // Índices para cada carrossel

function moveLeft(carrosselIndex) {
    const carrossel = document.querySelector(`#carrossel-${carrosselIndex}`);
    const totalItems = carrossel.querySelectorAll('.carrossel-publicacao').length;

    if (currentIndex[carrosselIndex] > 0) {
        currentIndex[carrosselIndex]--;
    } else {
        currentIndex[carrosselIndex] = totalItems - 5; // Volta ao final se estiver no começo
    }

    const newTransform = `translateX(-${currentIndex[carrosselIndex] * 20}%)`;
    carrossel.style.transform = newTransform;
}

function moveRight(carrosselIndex) {
    const carrossel = document.querySelector(`#carrossel-${carrosselIndex}`);
    const totalItems = carrossel.querySelectorAll('.carrossel-publicacao').length;

    if (currentIndex[carrosselIndex] < totalItems - 5) {
        currentIndex[carrosselIndex]++;
    } else {
        currentIndex[carrosselIndex] = 0; // Volta ao início se estiver no final
    }

    const newTransform = `translateX(-${currentIndex[carrosselIndex] * 20}%)`;
    carrossel.style.transform = newTransform;
}
