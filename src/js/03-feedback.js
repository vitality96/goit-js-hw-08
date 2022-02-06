import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector(".feedback-form");
const KEY_FORM = "feedback-form-state";


const onFormInput = () => {
    const formData = new FormData(feedbackForm);
    let userfrom = {};
    formData.forEach((value, name) => userfrom[name] = value.trim());
    localStorage.setItem(KEY_FORM, JSON.stringify(userfrom));
};

feedbackForm.addEventListener('input', throttle(onFormInput, 500));


const onPopulateFrom = () => {
    if (localStorage.getItem(KEY_FORM)) {
        Object.entries(JSON.parse(localStorage.getItem(KEY_FORM))).forEach(([name, value]) => feedbackForm.elements[name].value = value);
    };
};

onPopulateFrom();

const onFormSubmit = event => {
    event.preventDefault();
    if (feedbackForm.elements.email.value && feedbackForm.elements.message.value !== '') {
        console.log('Отправляем форму: ', JSON.parse(localStorage.getItem(KEY_FORM)));
        event.currentTarget.reset();
        localStorage.removeItem(KEY_FORM);
    };
};

feedbackForm.addEventListener('submit', onFormSubmit);
