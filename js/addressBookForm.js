const name = document.querySelector('#name');
const nameError = document.querySelector('.name-error');
name.addEventListener('input', function () {
    let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if (nameRegex.test(name.value)) nameError.textContent = "";
    else nameError.textContent = "Name is Incorrect";
})

const phone = document.querySelector('#phone');
const phoneError = document.querySelector('.phone-error');
phone.addEventListener('input', function () {
    let phoneRegex = RegExp('^[+]{0,1}[0-9]{2}\\s{0,1}[0-9]{10}$');
    if (phoneRegex.test(phone.value)) phoneError.textContent = "";
    else phoneError.textContent = "Phone Number is Incorrect";
})

const address = document.querySelector('#address');
const addressError = document.querySelector('.address-error');
address.addEventListener('input', function () {
    let addressRegex = RegExp('^[a-zA-Z0-9#,&\\s]{4,}$');
    if (addressRegex.test(address.value)) addressError.textContent = "";
    else addressError.textContent = "Address is Incorrect";
})