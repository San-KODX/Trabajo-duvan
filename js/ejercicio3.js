// EJERCICIO 3: Multiplicar con el evento submit y una función anónima.

// 1. Ahora seleccionamos el formulario (no el botón).
let formulario = document.getElementById("formEjercicio3");
let resultado = document.getElementById("resultado");

// 2. Escuchamos el envío del formulario.
formulario.addEventListener("submit", function (event) {

    // Evitamos que la página se recargue al enviar.
    event.preventDefault();

    let texto1 = document.getElementById("numero1").value;
    let texto2 = document.getElementById("numero2").value;

    if (texto1 === "" || texto2 === "") {
        resultado.textContent = "Escribe los dos números.";
        resultado.className = "mensaje error";
        return;
    }

    let numero1 = Number(texto1);
    let numero2 = Number(texto2);
    let producto = numero1 * numero2;

    resultado.textContent = `${numero1} × ${numero2} = ${producto}`;
    resultado.className = "mensaje exito";
});
