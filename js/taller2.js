// TALLER 2: Clasificar una nota (función con nombre).
let formulario=document.getElementById("formTaller2");
let resultado=document.getElementById("resultado");

formulario.addEventListener("submit", taller2);

function taller2(){
    event.preventDefault();
    let nota=parseFloat(document.getElementById("nota").value);
    let desempeno;
    let estado="Aprobado";

    if(isNaN(nota)){
        resultado.innerText="Escribe la nota.";
        resultado.className="error";
        return;
    }
    else if(nota<0 || nota>5){
        resultado.innerText="La nota debe ser entre 0.0 a 5.0.";
        resultado.className="error";
        return;
    }
    else if(nota>=4.5){
        desempeno="excelente";
    }
    else if(nota>=4.0){
        desempeno="bueno";
    }
    else if(nota>=3){
        desempeno="Aceptable";
    }
    else{
        desempeno="Insuficiente";
        estado="No Aprobado";
    }
    resultado.innerText=`Nota ${nota}: ${desempeno} ${estado}`;
    resultado.className="exito"
}