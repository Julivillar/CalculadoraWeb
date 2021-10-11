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
let pedirNumeros = function () {
    let numeros;
    let sonNumeros = false;
    let num1 = null;
    let num2 = null;
    do {
        numeros = prompt("Introduzca 2 numeros separados por un espacio");
        numeros = numeros.split(" ");

        if (numeros.indexOf('R') == -1) {
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
        } else {
            for (let i = 0; i < numeros.length; i++) {
                if (numeros[i] !== "") {
                    if (num1 == null) {
                        num1 = numeros[i];
                    } else if (num2 == null) {
                        num2 = numeros[i];
                    }
                }
            }
            if (num1 == 'R' && !isNaN(Number(num2)) && num2 != null) {
                num2 = Number(num2);
                sonNumeros = true;
            } else if (num2 == 'R' && !isNaN(Number(num1)) && num1 != null) {
                num1 = Number(num1);
                sonNumeros = true;
            } else {
                num1 = null;
                num2 = null;
                alert("Tienes que introducir numeros")
                sonNumeros = false;
            }
        }
    } while (!sonNumeros);

    return numeros;
}
let otra = true;
let operacion;
let lastResult = 0;
let operadores;
alert("Bienvenid@/e");
do {
    operacion = pedirOperacion();
    operadores = pedirNumeros();
    console.log(operadores);
    switch (operacion) {
        case "+":
            let suma = () => {
                if (operadores[0] == 'R') {
                    lastResult = lastResult + Number(operadores[1]);
                } else if (operadores[1] == 'R') {
                    lastResult = Number(operadores[0]) + lastResult;
                } else {
                    lastResult = Number(operadores[0]) + Number(operadores[1]);
                }
                return lastResult;
            }
            alert(suma());
            break;
        case "-":
            let resta = () => {
                if (operadores[0] == 'R') {
                    lastResult = lastResult - Number(operadores[1]);
                } else if (operadores[1] == 'R') {
                    lastResult = Number(operadores[0]) - lastResult;
                } else {
                    lastResult = Number(operadores[0]) - Number(operadores[1]);
                }
                return lastResult;
            }
            alert(resta());
            break;
        case "*":
            let multiplicar = () => {
                if (operadores[0] == 'R') {
                    lastResult = lastResult * Number(operadores[1]);
                } else if (operadores[1] == 'R') {
                    lastResult = Number(operadores[0]) * lastResult;
                } else {
                    lastResult = Number(operadores[0]) * Number(operadores[1]);
                }
                return lastResult;
            }
            alert(multiplicar());
            break;
        case "/":
            let dividir = () => {
                if (operadores[0] == 'R' && Number(operadores[1]) != 0) {
                    lastResult = lastResult / Number(operadores[1]);
                } else if (operadores[1] == 'R' && lastResult != 0) {
                    lastResult = Number(operadores[0]) / lastResult;
                } else if (Number(operadores[1]) != 0) {
                    lastResult = Number(operadores[0]) / Number(operadores[1]);
                }
                return lastResult;
            }
            alert(dividir());
            break;
        default:
            alert("Algo no has hecho bien");
            break;
    }
    otra = confirm("Quieres hacer otra?")
} while (otra == true);
