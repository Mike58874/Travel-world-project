const formRegister = document.getElementById('form-register');

formRegister.addEventListener('submit', function(event) {
    event.preventDefault();

    alert('Registrasi Berhasil! Akun Anda telah dibuat. Silakan login kembali.');

    window.location.href = 'login.html';
});