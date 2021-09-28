var num1;
var num2;
var num1Tam;
var num2Tam;
var operation;
var values = '';
var count = 0;
var countNew = 0;
var showResult = false;

window.onload = function onLoad() {

    resize();
    alert('Welcome, this project was made with: HTML - CSS GRID - JAVASCRIPT(without framework)')
}

window.onresize = function onResize() {
    resize();
}


window.onclick = function showValues() {

    let pantalla = document.getElementById('pantalla');

    if (!operation && showResult == false) {
        pantalla.innerHTML = values;
    } else if (operation && showResult == false) {
        pantalla.innerHTML = num1 + '' + values;
    }

    pantalla.scrollTo(99999999999999, 0)
}

function resize() {

    var element = document.getElementById('calculadoraSpace');

    element.style.height = document.documentElement.clientHeight + 'px'
}

function onClick(valueClick) {

    showResult = false;

    var div = valueClick.id;

    var valueDiv = document.getElementById(div).innerHTML;
    values += valueDiv
    /* console.log(values); */

    num2Tam = parseFloat(values.slice(num1Tam + 1)).length;

    if (!operation) {
        num1Tam = parseFloat(values).toString().length;
        num1 = values.slice(0, num1Tam);
        num2 = values.slice(num1Tam);
    } else {
        num2 = values;

    }
    

}

function operator(valueClick) {
    showResult = false;

    let endValue = values.length - 1; // * Calculo el tamano de la string

    let div = valueClick.id; // * Guardo el id del div clickeado
    let valueDiv = document.getElementById(div).innerHTML; // * Guardo el valor dentro del id

    if (count <= 0) {

        if (!operation && count == 0) {

            values += valueDiv;

        } else if (operation && countNew == 0) {

            values += valueDiv;
            countNew++;
        } else if (!operation && count != 0) {

            if (Number.isInteger(parseFloat(num2[0]))) {
                values += valueDiv;
            }
        } else if (operation && count != 0 /* && Number.isInteger(parseFloat(num2[0])) */) {


            values += valueDiv;

        }
        console.log(values);
        count++;
    } else {
        count = 1;
        result();
        num1 = operation;
        num2 = '';
        console.log('num2 vaciado -> ' + num2)
        values = '' + valueDiv;
    }
}

function result() {

    if (num1 && num2) {

        console.log('num1 y 2 son true');
        if (!operation) {
            switch (num2[0]) { // * Verifico que operador se selecciono
                case '+':
                    operation = parseFloat(num1) + parseFloat(num2.slice(1));
                    break;
                case '-':
                    operation = parseFloat(num1) - parseFloat(num2.slice(1));
                    break;
                case '/':
                    operation = parseFloat(num1) / parseFloat(num2.slice(1));
                    break;
                case 'x':
                    operation = parseFloat(num1) * parseFloat(num2.slice(1));
                    break;

                default:
                    console.log('No se hizo match con ninguno')
                    break;
            }
        } else {
            switch (num2[0]) { // * Verifico que operador se selecciono
                case '+':
                    operation = parseFloat(num1) + parseFloat(num2.slice(1));
                    break;
                case '-':
                    operation = parseFloat(num1) - parseFloat(num2.slice(1));
                    break;
                case '/':
                    operation = parseFloat(num1) / parseFloat(num2.slice(1));
                    break;
                case 'x':
                    operation = parseFloat(num1) * parseFloat(num2.slice(1));
                    break;

                default:
                    console.log('No se hizo match con ninguno')
                    break;
            }
        }


    }

    console.log(parseFloat(operation));
    if (operation) {
        showResult = true;
        document.getElementById('pantalla').innerHTML = operation.toString().slice(0, 10);
        num1 = operation;
        num2 = '';
    } else {
        showResult = true;
        document.getElementById('pantalla').innerHTML = operation.toString().slice(0,10);
    }

}


function del() {

    showResult = false;
    countNew = 0;
    count = 0;
    num1 = '';
    num2 = '';
    values = '';
    operation = undefined;

    console.log('eliminado!')
}
