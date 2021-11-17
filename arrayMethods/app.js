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
 * TODO: REDUCE and spread min 1:14
 */