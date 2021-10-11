function pedirOperacion() {
    let operacion;
    let operadorValido = false;
    do {
        operacion = prompt("Seleccione la operacion: +, -, *, /");
        operacion = operacion.replace(/\s+/g, '');
        if (operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/") {
            operadorValido = true;
        } else {
            alert("Operacion no reconocida");
            operadorValido = false;
        }
    } while (!operadorValido);
    return operacion;
}
let pedirNumeros = function(){
    let numeros;
    let sonNumeros = false;
    do {
        numeros = prompt("Introduzca 2 numeros separados por un espacio");
        numeros = numeros.split(" ");
        numeros = numeros.filter(Number);
        
        if (!isNaN(Number(numeros[0])) && !isNaN(Number(numeros[1]))) {
            if (numeros[0] == null || numeros[1] == null) {
                sonNumeros = false;
            } else {
                numeros[0] = Number(numeros[0]);
                numeros[1] = Number(numeros[1]);
                sonNumeros = true;
            }
        } else {
            alert("Tienes que introducir numeros")
            sonNumeros = false;
        } 
    } while (!sonNumeros);

    return numeros;
}
let otra = true;
let operacion;
let resultado;
let operadores;
alert("Bienvenid@/e");
do {
    operacion=pedirOperacion();
    operadores=pedirNumeros();
    console.log(operadores);
    switch (operacion) {
        case "+":
            let suma = ()=> operadores[0] + operadores[1];
            alert(suma());
            break;
        case "-":
            let resta = () => operadores[0] - operadores[1];
           alert(resta());
           break;
        //restar(numeros);
            break;
        case "*":
            let multiplicar = () => operadores[0] * operadores[1];
           alert(multiplicar());
            break;
        case "/":
            if(operadores[1]!=0){
                let dividir = () => operadores[0] / operadores[1];
                alert(dividir());
            }else{
                alert("No puedes dividir entre 0");
            }
            break;
        default:
            alert("Algo no has hecho bien");
            break;
    }
    otra = confirm("Quieres hacer otra?")
} while (otra == true);
