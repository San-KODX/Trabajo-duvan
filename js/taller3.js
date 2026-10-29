// TALLER 3: El mayor de tres números (sin Math.max).

let formulario = document.getElementById("formTaller3");
let resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    let textoA = document.getElementById("numeroA").value;
    let textoB = document.getElementById("numeroB").value;
    let textoC = document.getElementById("numeroC").value;

    // Ninguno de los tres campos puede estar vacío.
    if (textoA === "" || textoB === "" || textoC === "") {
        resultado.textContent = "Completa los tres números.";
        resultado.className = "mensaje error";
        return;
    }

    let a = Number(textoA);
    let b = Number(textoB);
    let c = Number(textoC);

    // Si los tres son iguales, lo avisamos.
    if (a === b && b === c) {
        resultado.textContent = "Los tres números son iguales.";
        resultado.className = "mensaje exito";
        return;
    }

    // Buscamos el mayor comparando de a pares.
    let mayor;

    if (a >= b && a >= c) {
        mayor = a;
    } else if (b >= a && b >= c) {
        mayor = b;
    } else {
        mayor = c;
    }

    resultado.textContent = `El número mayor es ${mayor}.`;
    resultado.className = "mensaje exito";
});
