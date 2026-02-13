const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const mainImage = document.getElementById("main-image");
const headerText = document.querySelector(".header-text");
const buttonsContainer = document.querySelector(".buttons");

function moveButton() {
    // Получаем размеры окна
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    // Добавляем абсолютное позиционирование только при первом наведении
    noBtn.style.position = "absolute";
    
    // Присваиваем новые координаты
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

function nextPage() {
    // Меняем картинку на вашу вторую фотографию
    mainImage.src = "foto-yes.jpg"; 
    
    // Меняем текст
    headerText.innerHTML = "Ура! Приложу все усилия, чтобы оправдать доверие";
    
    // Прячем кнопки
    buttonsContainer.style.display = "none";
    
    // Меняем цвет фона на более праздничный
    document.body.style.backgroundColor = "#ffc1c1";
}