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
const nameInMarkup = document.querySelector('.profile__name').textContent;//Жак-Ив Кусто
const professionInMarkup = document.querySelector('.profile__profession').textContent;// Исследователь океана

//находим форму попАп
const formElement = document.querySelector('.popup__form-container');
//находим поле ввода имени и профессии в попАпе
const nameInput = document.querySelector('.popup__input-name');
const jobInput = document.querySelector('.popup__input-profession');
//делаем значение в поле ввода формы равным значению в имени и профессии в разметке
nameInput.value = nameInMarkup;
jobInput.value = professionInMarkup;
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
}
//Смена контента на введённое значение в поля формы по клику на кнопку "Сохранить"
const popupButtonSave = document.querySelector('.popup__button-save');

popupButtonSave.addEventListener('click', function(event){
    nameInput.value = nameInMarkup;
    jobInput.value = professionInMarkup;
    //запрещаем перезагрузку страницы
	event.preventDefault();
    //закрываем попап при событии click
	popupButtonSave.addEventListener('click', togglePopup);
});
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

//лайк активен
const elementLike = document.querySelector('.element__like');
function toggleLike(event) {
    event.preventDefault();
    elementLike.classList.toggle('element__like-on')
}
elementLike.addEventListener('click', toggleLike);
