function toggleHeaderBlur(scrollPosition) {
    const header = document.getElementById('header');

    if (scrollPosition > 0) {
        header.classList.add('blured');
    } else {
        header.classList.remove('blured');
    }
}

document.addEventListener('load', () => {
    const scrollPosition = window.scrollY;
    toggleHeaderBlur(scrollPosition);
});

document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    toggleHeaderBlur(scrollPosition);
});

// Бургер меню
function toggleMenu() {
    // Получаем элементы DOM
    const body = document.body;
    const menuIcon = document.querySelector('.menu-icon');
    const navList = document.querySelector('.nav-links');

    // Переключаем классы
    body.classList.toggle('no-scroll');
    menuIcon.classList.toggle('change');
    navList.classList.toggle('active');
};

// Закрытие бургер меню при клике на ссылку меню
document.querySelectorAll('.nav-links__list-link').forEach(link => {
    link.addEventListener('click', () => {

        // Убираем все активные состояния
        document.body.classList.remove('no-scroll');
        document.querySelector('.menu-icon').classList.remove('change');
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// Добавляем слушатель событий на кнопку бургер-меню
document.querySelector('.menu-icon').addEventListener('click', toggleMenu);



