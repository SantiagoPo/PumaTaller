function validarFormulario() {
    var nombres = document.getElementById("nombres").value;
    var contrasenas = document.getElementById("contraseñas").value;

    if (nombres == "" || contrasenas == "") {
        alert("Por favor, complete todos los campos");
        return false;
    }

    var pattern = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
    if (!pattern.test(contrasenas)) {
        alert("La contraseña debe tener al menos 8 caracteres y contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.");
        return false;
    }

    return true;
}
