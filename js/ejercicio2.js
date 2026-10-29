// EJERCICIO 2: Restar con el evento click y una función con nombre.

let boton = document.getElementById("btnRestar");
let resultado = document.getElementById("resultado");

// Asociamos la función con nombre al click (sin paréntesis al final).
boton.addEventListener("click", restar);

function restar() {

    let texto1 = document.getElementById("numero1").value;
    let texto2 = document.getElementById("numero2").value;

    // Validamos que no haya campos vacíos.
    if (texto1 === "" || texto2 === "") {
        resultado.textContent = "Escribe los dos números.";
        resultado.className = "mensaje error";
        return;
    }

    let numero1 = Number(texto1);
    let numero2 = Number(texto2);
    let resta = numero1 - numero2;

    resultado.textContent = `${numero1} − ${numero2} = ${resta}`;
    resultado.className = "mensaje exito";
}
