document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    const overlay = document.createElement('div');

    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    hamburger.addEventListener('click', function() {
        nav.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', function() {
        nav.classList.remove('active');
        overlay.classList.remove('active');
    });

    const closeButton = document.querySelector('.nav__close');
    closeButton.addEventListener('click', function() {
        nav.classList.remove('active'); 
        overlay.classList.remove('active'); 
    });

    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            overlay.classList.remove('active');
        });
    });
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('messageError').innerText = '';
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    let valid = true;
    if (name === '') {
        document.getElementById('nameError').innerText = 'Пожалуйста, введите ваше имя.';
        valid = false;
    }
    if (email === '') {
        document.getElementById('emailError').innerText = 'Пожалуйста, введите вашу почту.';
        valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('emailError').innerText = 'Введите корректный адрес электронной почты.';
        valid = false;
    }
    if (message === '') {
        document.getElementById('messageError').innerText = 'Пожалуйста, введите ваше сообщение.';
        valid = false;
    }
    if (valid) {
        const data = {
            name: name,
            email: email,
            message: message
        };

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Успешно отправлено:', data);
            alert('Ваше сообщение успешно отправлено!');
            document.getElementById('contactForm').reset(); 
        })
        .catch((error) => {
            console.error('Ошибка:', error);
            alert('Произошла ошибка при отправке сообщения.');
        });
    }
});
