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






/*

// Находим форму в DOM
let formElement = document.querySelector('.popup');// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = document.querySelector('.profile__name');// Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector('.profile__profession');// Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    let nameValue = nameInput.getAttribute('value');
    let jobValue = JobInput.getAttribute('value');

    // Выберите элементы, куда должны быть вставлены значения полей
    let profileName = document.querySelector('.profile__name');
    let profileJob = document.querySelector('.profile__profession');
    // Вставьте новые значения с помощью textContent
    profileName.textContent = nameValue;
    profileJob.textContent = jobValue;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
*/




//8. Получение имени и информации о себе в поля ввода
let infoName = document.querySelector('.profile__name').textContent;
let infoJob = document.querySelector('.profile__profession').textContent;
const nameProfile = document.forms.profile.elements.name;
const aboutProfile = document.forms.profile.elements.about;

nameProfile.value = infoName;
aboutProfile.value = infoJob;

//Смена контента на введённое значение в поля формы по клику на кнопку "Сохранить"
const popupEditButton = document.querySelector('.popup__button-save');

popupEditButton.addEventListener('click', function(event) {
    const userName = document.querySelector('.profile__name');
    const userJob = document.querySelector('.profile__profession');
    userName.textContent = nameProfile.value;
    userJob.textContent = aboutProfile.value;

    //запрещаем перезагрузку страницы
	event.preventDefault();
    //закрываем попап при событии click
	deleteClassToPopupEdit();
});