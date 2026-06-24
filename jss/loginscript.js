// Tangani submit form login
const formLogin = document.getElementById('form-login');

formLogin.addEventListener('submit', function (event) {
    event.preventDefault(); // mencegah refresh halaman

    // TODO: tambahkan validasi / pengecekan akun di sini
    alert('Login berhasil!');

    // contoh redirect setelah login sukses
    window.location.href = 'index.html';
});