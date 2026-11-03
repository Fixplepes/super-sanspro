function openTab(tabId, button) {

    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });

    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    document.getElementById(tabId).classList.add('active');

    button.classList.add('active');
}



const subjects = [
    "алгебра",
    "русский язык",
    "биология",
    "казахский язык",
    "физкультура",
    "география",
    "физика"
];

let currentSubject = 0;

function changeSubject(direction) {

    currentSubject += direction;

    if (currentSubject >= subjects.length) {
        currentSubject = 0;
    }

    if (currentSubject < 0) {
        currentSubject = subjects.length - 1;
    }

    document.getElementById("subjectName").textContent =
        subjects[currentSubject];

    document.getElementById("gradeValue").textContent = "4.2";
}


let account = null;

function showAccount() {

  
    if (account !== null) {
        alert(
            "Данные аккаунта:\n\n" +
            "Пол: " + account.gender + "\n" +
            "Почта: " + account.email + "\n" +
            "Пароль: " + account.password + "\n" +
            "Телефон: " + account.phone + "\n" +
            "Имя: " + account.name + "\n" +
            "Фамилия: " + account.surname + "\n" +
            "Страна: " + account.country
        );
        return;
    }

  
    let gender = prompt("Введите пол (Мужской / Женский):");
    if (!gender) return;

    let email = prompt("Введите электронную почту:");
    if (!email) return;


    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Ошибка! Введите правильный адрес электронной почты.");
        return;
    }

    let password = prompt("Введите пароль (минимум 8 символов):");
    if (!password) return;


    if (password.length < 8) {
        alert("Ошибка! Пароль должен содержать минимум 8 символов.");
        return;
    }

    let phone = prompt("Введите номер телефона:");
    if (!phone) return;

    let name = prompt("Введите имя:");
    if (!name) return;

    let surname = prompt("Введите фамилию:");
    if (!surname) return;

    let country = prompt("Введите страну:");
    if (!country) return;


    account = {
        gender: gender,
        email: email,
        password: password,
        phone: phone,
        name: name,
        surname: surname,
        country: country
    };

    alert("Регистрация успешно завершена!");
}