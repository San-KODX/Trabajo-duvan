// EJERCICIO 4: Dividir con el evento submit y una función con nombre.

let formulario = document.getElementById("formEjercicio4");
let resultado = document.getElementById("resultado");

formulario.addEventListener("submit", dividir);

function dividir(event) {

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

    // No se puede dividir entre cero.
    if (numero2 === 0) {
        resultado.textContent = "No es posible dividir entre cero.";
        resultado.className = "mensaje error";
        return;
    }

    let cociente = numero1 / numero2;

    resultado.textContent = `${numero1} ÷ ${numero2} = ${cociente}`;
    resultado.className = "mensaje exito";
}
