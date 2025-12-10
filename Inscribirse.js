document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();  
        const email = document.getElementById('email-signup').value;
        const password = document.getElementById('password-signup').value;

        if (email && password) {
            alert("¡Te has registrado con éxito!");
            window.location.href = "Inicio.html";  
        } else {
            alert("Por favor, ingresa tu correo electrónico y contraseña.");
        }
    });
});
