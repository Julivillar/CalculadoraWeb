alert("Bienvenido");

let otra=true;
let operadorValido=false;
let sonNumeros=false;
let operacion;
let numeros;
let num1=null;
let num2=null;
do {

    do {
        operacion= prompt("Seleccione la operacion: +, -, *, /");
        operacion=operacion.replace(/\s+/g, '');
        if (operacion=="+" || operacion=="-" || operacion=="*" || operacion=="/") {
            operadorValido=true;
        } else {
            alert("Operacion no reconocida");
            operadorValido=false;
        }    
    } while (!operadorValido);

    do {
        num1 =null;
        num2 =null;
        numeros = prompt("Introduzca 2 numeros separados por un espacio");
        numeros=numeros.split(" ");
        //alert(numeros);
        numeros=numeros.filter(Number);
        //alert(numeros);
        num1=numeros[0];
        num2=numeros[1];

        if (!isNaN(Number(num1)) || !isNaN(Number(num2))) {
            num1=Number(num1);
            num2=Number(num2);
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
