// EJERCICIO 1: Sumar con el evento click y una función anónima.

// 1. Seleccionamos el botón y el párrafo de resultados.
let boton = document.getElementById("btnSumar");
let resultado = document.getElementById("resultado");

// 2. Escuchamos el click del botón con una función anónima.
boton.addEventListener("click", function () {

    // 3. Obtenemos los valores (siempre llegan como texto).
    let texto1 = document.getElementById("numero1").value;
    let texto2 = document.getElementById("numero2").value;

    // 4. Validamos que no haya campos vacíos.
    if (texto1 === "" || texto2 === "") {
        resultado.textContent = "Escribe los dos números.";
        resultado.className = "mensaje error";
        return;
    }

    // 5. Convertimos el texto a número y sumamos.
    let numero1 = Number(texto1);
    let numero2 = Number(texto2);
    let suma = numero1 + numero2;

    // 6. Mostramos el resultado.
    resultado.textContent = `${numero1} + ${numero2} = ${suma}`;
    resultado.className = "mensaje exito";
});
