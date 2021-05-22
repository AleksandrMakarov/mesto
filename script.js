//скрипт вызова popup по нажатию кнопки
let openPupupButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.popup__close-button');

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


//находим поле формы попАп
let formElement = document.querySelector('.popup__form-container');

//находим строку в DOM с именем и профессией
let infoName = document.querySelector('.profile__name').textContent;
let infoJob = document.querySelector('.profile__profession').textContent;
//находим поля ввода попАп
let nameProfile = document.querySelector('.popup__input-name');
let aboutProfile = document.querySelector('.popup__input-profession');

nameProfile.value = infoName;
aboutProfile.value = infoJob;

function formSubmitHandler (event) {
  let userName = document.querySelector('.profile__name');
  let userJob = document.querySelector('.profile__profession');
  userName.textContent = nameProfile.value;
  userJob.textContent = aboutProfile.value;

	event.preventDefault();// Эта строчка отменяет стандартную отправку формы.
	togglePopup(event);
};
//обработчик отправки формы
formElement.addEventListener('submit', formSubmitHandler);
