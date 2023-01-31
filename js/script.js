let menuBurger = document.getElementById('burger_li');
let menu = document.querySelector('.menu_list');
function openMenu() {
    if (menuBurger.classList.contains('opened')) {
        menuBurger.classList.remove('opened');
        menu.classList.remove('opened');
    }
    else {
        menuBurger.classList.add('opened');
        menu.classList.add('opened');
    }
}
menuBurger.addEventListener('click', openMenu);

let links = document.querySelectorAll('.menu_link');
for (const link of links) {
    link.onclick = function () {
        menuBurger.classList.remove('opened');
        menu.classList.remove('opened');
    }
}

let label = document.getElementById('number_lb');
let element = document.querySelector('.number');
element.addEventListener('input', onInput)
function onInput() {
    let maskOptions = {
        mask: '{+7} 000-000-0000'
    };
    let mask = IMask(element, maskOptions);
}
element.addEventListener('change', onChagne);

function onChagne() {
    if (element.value.length < 15) {
        label.classList.add('wrong');
        label.innerText = 'Заполните поле правильно!';
    }
    else {
        label.classList.remove('wrong');
        label.innerText = 'Введите ваш номер телефона:';
    }
}

let form = document.forms['main_6_content_form'];
form.addEventListener('submit', sender);
function sender(event) {
    if (label.classList.contains('wrong')) {
        event.preventDefault();
    }
    else {
        form.send();
    }
}

document.querySelectorAll('.menu_link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);
        const topOffset = document.querySelector('.header').offsetHeight + 20;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});


document.querySelectorAll('.footer_link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);
        const topOffset = document.querySelector('.header').offsetHeight + 20;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});


document.querySelectorAll('.order').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        let btn = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(btn);
        const topOffset = document.querySelector('.header').offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: "smooth",
        });
    });
});


