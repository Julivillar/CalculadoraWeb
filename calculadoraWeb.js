alert("Bienvenido");

let otra=true;
let operadorValido=false;
let sonNumeros=false;
let operacion;
let numeros;
let num1;
let num2;
do {
    do {
        operacion= prompt("Seleccione la operacion: +, -, *, /");
        if (operacion=="+" || operacion=="-" || operacion=="*" || operacion=="/") {
            operadorValido=true;
        } else {
            alert("Operacion no reconocida");
            operadorValido=false;
        }    
    } while (!operadorValido);

    do {
        numeros = prompt("Introduzca 2 numeros separados por un espacio");
        numeros = numeros.split(" ", 2);
        if (!isNaN(parseInt(numeros[0])) && !isNaN(parseInt(numeros[1]))) {
            num1= parseInt(numeros[0]);
            num2= parseInt(numeros[1]);
            sonNumeros=true;
        }else{
            alert("Tienes que introducir numeros")
            sonNumeros=false;
        }    
    } while (!sonNumeros);
    
    switch (operacion) {
        case "+":
            alert(num1+num2);
            break;
        case "-":
            alert(num1 - num2);
            break;
        case "*":
            alert(num1 * num2);
            break;
        case "/":
            if (num2==0) {
                alert("No se puede dividir entre 0")  
            }else{
                alert(num1 / num2);
            }
            break;
        default:
            alert("Algo no has hecho bien");
            break;
    }
    otra=confirm("Quieres hacer otra?")
} while (otra==true);
