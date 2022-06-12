let form = document.getElementById("form");
let surname = document.getElementById("surname");
let firstName = document.getElementById("name");
let sex = document.getElementById("sex");
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let login = document.getElementById("login");
let password = document.getElementById("password");
let email = document.getElementById("email");
let emailAdd = document.getElementById("email-add");
let reg = document.getElementById("reg");
let save = document.getElementById("save");

form.addEventListener("submit", submit);
function submit(e) {
    e.preventDefault();
    if (surname.value == "") {
        alert("Незаполненное поле Фамилия!");
        return;
    }
    if (firstName.value == "") {
        alert("Незаполненное поле Имя!");
        return;
    }
    if (sex.value == "") {
        alert("Незаполненное поле Пол!");
        return;
    }
    if (day.value == "") {
        alert("Незаполненное поле День!");
        return;
    }
    if (day.value < 1 || day.value > 31) {
        alert("Ошибка, введенный вами день меньше 1 или больше 31!");
        return;
    }
    if (month.value == "") {
        alert("Незаполненное поле Месяц!");
        return;
    }
    if (year.value == "") {
        alert("Незаполненное поле Год!");
        return;
    }
    if (year.value > new Date().getFullYear() || year.value < 1900) {
        alert("Ошибка год некорректен!");
        return;
    }
    if (login.value == "") {
        alert("Незаполненное поле Имя пользователя!");
        return;
    }
    if (password.value == "") {
        alert("Незаполненное поле Пароль!");
        return;
    }
    if (email.value == "") {
        alert("Незаполненное поле E-mail!");
        return;
    }
    if (emailAdd.value == "") {
        alert("Незаполненное поле Дополнительный E-mail!");
        return;
    }
    if (!reg.checked && !save.checked){
        alert("Пожалуйста, выберите хотя бы один вариант, чтобы продолжить!");
        return;
    }
}