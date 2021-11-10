function pedirOperacion() {
    let operacion;
    let operadorValido = false;
    do {
        try {
            operacion = prompt("Seleccione la operacion: +, -, *, /");
            operacion = operacion.replace(/\s+/g, '');
            if (operacion === "+" || operacion === "-" || operacion === "*" || operacion === "/") {
                operadorValido = true;
            } else {
                throw error;
            }
        } catch (error) {
            alert("Operacion no reconocida");
            operadorValido = false;
        }
        /*operacion = prompt("Seleccione la operacion: +, -, *, /");
        operacion = operacion.replace(/\s+/g, '');
        if (operacion === "+" || operacion === "-" || operacion === "*" || operacion === "/") {
            operadorValido = true;
        } else {
            alert("Operacion no reconocida");
            operadorValido = false;
        }*/
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

        if (numeros.indexOf('R') === -1) {
            try {
                numeros = numeros.filter(Number);
                numeros[0] = Number(numeros[0]);
                numeros[1] = Number(numeros[1]);
                sonNumeros = true;
            } catch (error) {
                alert("Tienes que introducir numeros");
                sonNumeros = false;
            }
            /*numeros = numeros.filter(Number);
            if (!isNaN(Number(numeros[0])) && !isNaN(Number(numeros[1]))) {
                if (numeros[0] === null || numeros[1] === null) {
                    sonNumeros = false;
                } else {
                    numeros[0] = Number(numeros[0]);
                    numeros[1] = Number(numeros[1]);
                    sonNumeros = true;
                }
            } else {
                alert("Tienes que introducir numeros")
                sonNumeros = false;
            }*/
        } else {
            for (let i = 0; i < numeros.length; i++) {
                if (numeros[i] !== "") {
                    if (num1 === null) {
                        num1 = numeros[i];
                    } else if (num2 === null) {
                        num2 = numeros[i];
                    }
                }
            }
            try {
                if (num1 === 'R' && num2 != null) {
                    num2 = Number(num2);
                    sonNumeros = true;
                } else if (num2 === 'R' && !isNaN(Number(num1)) && num1 != null) {
                    num1 = Number(num1);
                    sonNumeros = true;
                }
            } catch (error) {
                num1 = null;
                num2 = null;
                alert("Tienes que introducir numeros")
                sonNumeros = false;
            }
        }
        /*else {
           for (let i = 0; i < numeros.length; i++) {
               if (numeros[i] !== "") {
                   if (num1 === null) {
                       num1 = numeros[i];
                   } else if (num2 === null) {
                       num2 = numeros[i];
                   }
               }
           }
           if (num1 === 'R' && !isNaN(Number(num2)) && num2 != null) {
               num2 = Number(num2);
               sonNumeros = true;
           } else if (num2 === 'R' && !isNaN(Number(num1)) && num1 != null) {
               num1 = Number(num1);
               sonNumeros = true;
           } else {
               num1 = null;
               num2 = null;
               alert("Tienes que introducir numeros")
               sonNumeros = false;
           }
       }*/
    } while (!sonNumeros);

    return numeros;
}
/*
    Clase calculadora
*/
class Calculadora {
    lastResult = 0;
    /*
    reemplazar la R por el valor de lastResult
    */
    suma(numero1, numero2) {
        let resultado = 0;
        if (numero1 === 'R') {
            numero1 = this.lastResult;
        } else if (numero2 === 'R') {
            numero2 = this.lastResult;
        }
        resultado = Number(numero1) + Number(numero2);
        alert(resultado);
        this.lastResult = resultado;
    }

    resta(numero1, numero2) {
        let resultado = 0;
        if (numero1 === 'R') {
            numero1 = this.lastResult;
        } else if (numero2 === 'R') {
            numero2 = this.lastResult;
        }
        resultado = Number(numero1) - Number(numero2);
        alert(resultado);
        this.lastResult = resultado;
    }

    multiplicacion(numero1, numero2) {
        let resultado = 0;
        if (numero1 === 'R') {
            numero1 = this.lastResult;
        } else if (numero2 === 'R') {
            numero2 = this.lastResult;
        }
        resultado = Number(numero1) * Number(numero2);
        alert(resultado);
        this.lastResult = resultado;
    }

    division(numero1, numero2) {
        let resultado = 0;
        if (numero1 === 'R' && numero2 !== 0) {
            numero1 = this.lastResult;
        } else if (numero2 === 'R' && numero2 !== 0) {
            numero2 = this.lastResult;
        } else {
            return;
        }
        resultado = numero1 / numero2;
        alert(resultado);
        this.lastResult = resultado;
    }

}
/*
    Empieza el programa
*/
alert("Bienvenid@/e");
let otra = true;
let operacion;
let numeros;

let calculadora = new Calculadora();
do {
    operacion = pedirOperacion();
    numeros = pedirNumeros();
    switch (operacion) {
        case "+":
            calculadora.suma(numeros[0], numeros[1]);
            break;
        case "-":
            calculadora.resta(numeros[0], numeros[1]);
            break;
        case "*":
            calculadora.multiplicacion(numeros[0], numeros[1]);
            break;
        case "/":
            calculadora.division(numeros[0], numeros[1]);
            break;
        default:
            alert("Algo no has hecho bien");
            break;
    }
    otra = confirm("Quieres hacer otra?")
} while (otra === true);
