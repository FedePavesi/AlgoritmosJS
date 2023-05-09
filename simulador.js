//ALGORITMO CONDICIONAL + CICLO PARA EL INGRESO CON CLAVE + FUNCION DE SALUDO


let clave = prompt("Ingrese clave para continuar");

function saludar() {

    alert("Bienvenido/a al sistema!!");
}

while (clave != "coderhouse") {

    alert ("su clave es incorrecta");
    clave = prompt("Ingrese clave para continuar");

}

if( clave == "coderhouse"){ 

    saludar ();
    let grados = parseInt(prompt("Indica cuantos grados hace actualmente en tu ciudad"));
    if (grados <= 0) {
    alert("En tu ciudad hace mucho frio");
    } else if ((grados > 0) && (grados <= 18)) {
    alert("En tu ciudad hace frio");
    } else if ((grados > 18) && (grados <= 26)) {
    alert("En tu ciudad el clima esta templado");
    } else if ((grados > 26) && (grados <= 34)) {
    alert("En tu ciudad hace calor");
    }
       
} else {  

     console.log ("saliendo...");

}