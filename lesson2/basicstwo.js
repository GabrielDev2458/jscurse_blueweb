//for of
let fruits = ["apple", "banana", "pear"];

for (let fruit of fruits) {
    console.log(fruit);
}
//fruits[Symbol.iterator]
//ƒ values() { [native code] } is iterable


//Hoisting
/**
 * TODO: Translate definition to english
 */

/**
    * *Conceptualmente, una estricta definición de hoisting sugiere que las declaraciones de variables y funciones son físicamente movidas al comienzo del código, pero esto no es lo que ocurre en realidad. Lo que sucede es que las declaraciones de variables y funciones son asignadas en memoria durante la fase de compilación, pero quedan exactamente en dónde las has escrito en el código.
 */

catName("Dumas");

function catName(name) {
    console.log("My cat's name is " + name);
}
/*
    The result of the code is: "My cat's name is Dumas"
*/

/**
    * *JavaScript sólo utiliza el hoisting en declaraciones, no   inicializaciones. Si está utilizando una variable que es declarada e inicializada después  (está después en el código) de usarla, el valor será undefined. El siguiente ejemplo demuestra ese comportamiento:
 */

 var x = 1; // Initialize x
 console.log(x + " " + y); // '1 undefined'
 var y = 2; // Initialize y

/**
    * *Si usamos let para declarar la variable esto produce un error:
 */

 let z = 1; // Initialize z
 //console.log(z + " " + w); //!Uncaught ReferenceError: Cannot access 'w' before initialization
 let w = 2; // Initialize w


 // var and let

var state = true;
var state = false;
console.log(state); //false

let state2 = true;
//let state2 = false;
//console.log(state2); //!Uncaught SyntaxError: Identifier 'state2' has already been declared

var state3 = true;
if (state3) {
    var state3 = false;
}
console.log(state3); //false

let state4 = true;
if (state4) {
    let state4 = false;
    console.log(state4); //false
}
console.log(state4); //true

// Array vs const

const myArray = [];
//myArray = ["nuevoElemento"];//!Uncaught TypeError: Assignment to constant variable.

const miArray = [];
miArray[0] = ["nuevoElemento"];
console.log(miArray);

//Declaratives and Anonymous functions

//  Declarative
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(randomNumber(1, 11));

// Anonymous
const rndNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(rndNumber(1, 11));

/**
 * TODO: Translate tip to english
 *
 * *TIP

 * *La forma correcta de definir una función varía según el comportamiento que esperemos de la misma: con las funciones declaradas, tenemos la seguridad de que siempre estarán disponibles en tiempo de ejecución. Con las funciones expresadas, tendremos que éstas no son evaluadas hasta que el intérprete no alcance su posición en el código, lo cual puede generar errores en arquitecturas muy anidadas.
 * *El hecho de que las funciones declarativas se evalúen antes que las expresiones, pueden producir comportamientos no deseados cuando forman parte de condicionales. Para estos casos, el uso de las funciones expresadas garantiza que éstas formarán parte del flujo general del programa, lo cual puede evitarnos sorpresa en determinados entornos.
 */

//Arrow functions

const randomArrowLarge = (max) => {
    return Math.floor(Math.random() * (max - 1)) + 1;
}
console.log(randomArrowLarge(11))

const randomArrowShort = max => Math.floor(Math.random() * (max - 1)) + 1;
console.log(randomArrowShort(11));

/**
 * TODO: Translate to english
 *

 * *Limitantes:

 * *No tiene sus propios enlaces a this o super y no se debe usar como métodos.
 * *No tiene argumentos o palabras clave new.target.
 * *No apta para los métodos call, apply y bind, que generalmente se basan en establecer un ámbito o alcance
 * * No se puede utilizar como constructor.
*/

//forEach
let colors = ["red", "blue", "yelow"]
colors.forEach((color, index, array) => {
    console.log(color);//currentValue
    console.log(index);//index
    console.log(array);//array: Value to use as this when executing callbackFn
})

