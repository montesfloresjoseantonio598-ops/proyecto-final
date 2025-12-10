document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();  

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (email && password) {
            alert("Acceso exitoso.");
            window.location.href = "Inicio.html";  
        } else {
            alert("Por favor, ingresa tu correo electrónico y contraseña.");
        }
    });
});
