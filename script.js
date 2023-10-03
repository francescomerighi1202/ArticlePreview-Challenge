let shareIcon = document.querySelector('.fa-share');
let shareIconMobile = document.querySelector('.mobile-share');
let floatShareBox = document.querySelector('.speech');
let fixedShareBox = document.querySelector('.card__author-share-mobile');
let authorBox = document.querySelector('.card__author');

shareIcon.addEventListener('click', () => {
    floatShareBox.classList.add('visible');
});

shareIconMobile.addEventListener('click', () => {
    fixedShareBox.style.display = 'flex';
    fixedShareBox.style.animation = 'fadeIn 0.3s ease-in-out';
    authorBox.style.display = 'none';
});

document.addEventListener('click', (e) => {
    if (e.target !== shareIcon && e.target !== shareIconMobile) {
        floatShareBox.classList.remove('visible');
        fixedShareBox.style.display = 'none';
        authorBox.style.display = 'flex';
    }
});