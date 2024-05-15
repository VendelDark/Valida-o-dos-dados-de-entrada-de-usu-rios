function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

document.getElementById("formEmail").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário
    const emailUsuario = document.getElementById("email").value;
    if (validarEmail(emailUsuario)) {
        alert("Endereço de e-mail válido!");
    } else {
        alert("Endereço de e-mail inválido!");
    }
});