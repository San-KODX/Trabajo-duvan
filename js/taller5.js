// TALLER 5: Calculadora con selector (función con nombre y switch).

let formulario = document.getElementById("formTaller5");
let resultado = document.getElementById("resultado");

formulario.addEventListener("submit", calcular);

function calcular(event) {

    event.preventDefault();

    let textoPrimero = document.getElementById("primero").value;
    let textoSegundo = document.getElementById("segundo").value;
    let operacion = document.getElementById("operacion").value;

    // Los dos números son obligatorios.
    if (textoPrimero === "" || textoSegundo === "") {
        resultado.textContent = "Escribe los dos números.";
        resultado.className = "mensaje error";
        return;
    }

    // Debe haberse elegido una operación.
    if (operacion === "") {
        resultado.textContent = "Selecciona una operación.";
        resultado.className = "mensaje error";
        return;
    }

    let primero = Number(textoPrimero);
    let segundo = Number(textoSegundo);

    // No se puede dividir entre cero.
    if (operacion === "division" && segundo === 0) {
        resultado.textContent = "No es posible dividir entre cero.";
        resultado.className = "mensaje error";
        return;
    }

    // switch elige qué cuenta hacer según la operación.
    let mensaje;

    switch (operacion) {
        case "suma":
            mensaje = `${primero} + ${segundo} = ${primero + segundo}`;
            break;
        case "resta":
            mensaje = `${primero} − ${segundo} = ${primero - segundo}`;
            break;
        case "multiplicacion":
            mensaje = `${primero} × ${segundo} = ${primero * segundo}`;
            break;
        case "division":
            mensaje = `${primero} ÷ ${segundo} = ${primero / segundo}`;
            break;
    }

    resultado.textContent = mensaje;
    resultado.className = "mensaje exito";
}
