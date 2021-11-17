//map
const fruits = ["🍌", "🍏", "🍓"];

const newFruitsArray = fruits.map((fruit) => {
    return fruit;
});
console.log(newFruitsArray);

//filter
const users = [
    { uid: 1, name: "John", age: 34 },
    { uid: 2, name: "Amy", age: 20 },
    { uid: 3, name: "camperCat", age: 10 },
];

const higher = users.filter((user) => user.age > 30);
console.log(higher);

//find
const amy = users.find((user) => user.uid === 2);
console.log(amy);

//some
const exist = users.some((user) => user.uid === 2);
console.log(exist);

/**
 * findIndex
 * TODO: Translate.
 **El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1
*/
const indexFound = users.findIndex((user) => user.uid === 4);
console.log(indexFound);

//Slice
const arr = ["Cat", "Dog", "Tiger", "Zebra"];
//             0      1       2        3
const newArray = arr.slice(1, 3);

console.log(newArray);

/**
 * Reduce
 * TODO: Translate and study more.
 * *El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor
 */

const numbers = [1, 2, 3, 4, 5];

const addNumbers = numbers.reduce((previousValue, currentValue) => previousValue + currentValue); //acc: acumulador

console.log(addNumbers);

const fatMatrix = [
    [0, 1],
    [2, 3],
    [4, 5],
];

console.log(fatMatrix);

const flatMatrix = fatMatrix.reduce(
    (acc, cur) => acc.concat(cur)
);

console.log(flatMatrix);

/**
 * Arguments
 * *previousValue (the value resulting from the previous call to callbackfn) (acc)
 * *currentValue (the value of the current element) (cur)
 * *currentIndex Optional (idx)
 * *array (the array to traverse) Optional (src)
*/

//split and join

const months = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

const arrayMonths = months.split(",");
const stringMonths = arrayMonths.join(",");

console.log(arrayMonths);
console.log(stringMonths);