// TALLER 1: Par o impar.

let formulario =document.getElementById("formTaller1");
let resultado = document.getElementById("resultado");

formulario.addEventListener("submit", taller1);

function taller1(){
    event.preventDefault();

    let numero=parseFloat(document.getElementById("numero").value);

    //Validar que la variante numero no sea nula o invalida isNaN
    if(isNaN(numero)){
        resultado.innerText="Escribe un numero.";
        resultado.className="error"
        return;
    }
    else if (numero % 1 !==0){
        resultado.innerText="Escribe un numero entero.";
        resultado.className="error"
        return;
    }
    else if (numero %2 ==0){
        resultado.innerText="El numero es par.";
        resultado.className="exito"
        return;
    }
}