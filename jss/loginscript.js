const formLogin = document.getElementById('form-login');

formLogin.addEventListener('submit', function (event) {
    event.preventDefault();

    alert('Login berhasil!');

    window.location.href = 'index.html';
});