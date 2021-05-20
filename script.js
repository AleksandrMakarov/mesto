//скрипт вызова popup по нажатию кнопки
const openPupupButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__close-button');

function togglePopup(event) {
    event.preventDefault();
    popup.classList.toggle('popup__opened');
}
openPupupButton.addEventListener('click', togglePopup);

closePopupButton.addEventListener('click', togglePopup);
function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
        togglePopup(event);
    }
}
popup.addEventListener('click', handleOverlayClick);

//находим строку в DOM с именем и профессией
let infoName = document.querySelector('.profile__name').textContent;
let infoJob = document.querySelector('.profile__profession').textContent;
//находим форму попАп
const nameProfile = document.querySelector('.popup__input-name');
const aboutProfile = document.querySelector('.popup__input-profession');

nameProfile.value = infoName;
aboutProfile.value = infoJob;

//сохранение данных в полях по кнопке сохранить
const popupEditButton = document.querySelector('.popup__button-save');

popupEditButton.addEventListener('click', function(event) {
    const userName = document.querySelector('.profile__name');
    const userJob = document.querySelector('.profile__profession');
    userName.textContent = nameProfile.value;
    userJob.textContent = aboutProfile.value;

	event.preventDefault();
	togglePopup(event);
});

//пока не нужно
/*
//вкл- выкл лайка
const elementLike = document.querySelector('.element__like');

function toggleElementLike(event) {
    event.preventDefault();
    elementLike.classList.toggle('element__like_on');
}
console.log(toggleElementLike)
elementLike.addEventListener('click', toggleElementLike);
*/

