// TALLER 4: Formulario de registro (función con nombre).

let formulario = document.getElementById("formTaller4");
let resultado = document.getElementById("resultado");

formulario.addEventListener("submit", validarRegistro);

// Mostramos el primer error que encontremos y salimos con return.
function validarRegistro(event) {

    event.preventDefault();

    // trim() quita los espacios del inicio y del final.
    let nombre = document.getElementById("nombre").value.trim();
    let textoEdad = document.getElementById("edad").value;
    let correo = document.getElementById("correo").value.trim();
    let clave = document.getElementById("clave").value;
    let confirmar = document.getElementById("confirmar").value;

    // 1. Nombre no vacío.
    if (nombre === "") {
        resultado.textContent = "Escribe tu nombre.";
        resultado.className = "mensaje error";
        return;
    }

    // 2. Edad no vacía.
    if (textoEdad === "") {
        resultado.textContent = "Escribe tu edad.";
        resultado.className = "mensaje error";
        return;
    }

    // 3. Edad: número entero entre 18 y 100.
    let edad = Number(textoEdad);

    if (!Number.isInteger(edad) || edad < 18 || edad > 100) {
        resultado.textContent = "La edad debe ser un número entero entre 18 y 100.";
        resultado.className = "mensaje error";
        return;
    }

    // 4. Correo: debe contener @ y .
    if (!correo.includes("@") || !correo.includes(".")) {
        resultado.textContent = "Escribe un correo válido.";
        resultado.className = "mensaje error";
        return;
    }

    // 5. La confirmación debe coincidir con la contraseña.
    if (confirmar !== clave) {
        resultado.textContent = "Las contraseñas no coinciden.";
        resultado.className = "mensaje error";
        return;
    }

    // 6. Todo correcto.
    resultado.textContent = `Registro exitoso. Bienvenido(a), ${nombre}.`;
    resultado.className = "mensaje exito";
}
