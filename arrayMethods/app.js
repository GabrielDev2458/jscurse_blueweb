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