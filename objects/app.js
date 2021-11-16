//Object

const cat = {
    name: 'Valiente',
    sleep: true,
    age: 10,
    enemies: ["agua", "perros"]
}

//CRUD

//create
cat.color = 'white';

//read
console.log(cat);

//update
cat.age = 9;

//delete
delete cat.sleep;

//hasOwnProperty

console.log(cat.hasOwnProperty("nombre")); //true
console.log(cat.hasOwnProperty("salud")); //false

//Optional chaining

/**
 * TODO: Translate to english
 *
 * *El operador de encadenamiento opcional ?. permite leer el valor de una propiedad ubicada dentro de una cadena de objetos conectados sin tener que validar expresamente que cada referencia en la cadena sea válida.
 */

//console.log(cat.others.favorites);//!Uncaught TypeError: Cannot read properties of undefined (reading 'favoritos')

console.log(cat.others?.favorites);

//Methods

const user = {
    name: "Sam",
    sleep: true,
    age: 20,
    hobbies:['swim','read','play soccer','walk'],
    others: {
        firends: ['Gabriel','Jhon','Ana']
    },
    eat: function () {
        console.log("Now he's eating");
    },
    work() {
        return `${this.name} is working`;
    },
    showHobbies() {
        return this.hobbies.forEach((hobbie) => console.log(hobbie));
    },
    get upperCaseName() {
        return this.name.toUpperCase();
    },
    set newHobbie(hobbie) {
        this.hobbies.push(hobbie);
    },
};

user.eat();
console.log(user.work());
user.showHobbies();

for (const property in user) {
    console.log(property); // hobbies
    console.log(user[property]); //['swim','read','play soccer','walk']
}

console.log(Object.values(user));
console.log(Object.keys(user));
console.log(Object.entries(user));

//Destructuring Objects
const { sleep, age } = user;
console.log(sleep);

//alias
const { hobbies: hobbiesUser } = user;
console.log(hobbiesUser);

//default
const { name: nameUser = "Nameless" } = user;

const {
    others: { firends },
} = user;
console.log(firends);

const { work } = user;
console.log(work()); // undefined is working

/**
 * TODO: Translate to english
 *
 * *get: Enlaza la propiedad de un objeto con una función que será llamada cuando la propiedad es buscada.
 * *set: La sintaxis set asocia la propiedad de un objeto a una función que será llamada cuando haya un intento de asignar valor a esa propiedad.
 */

// GET
console.log(user.upperCaseName);

// SET
user.newHobbie = "batman";
console.log(user.hobbies);

/**
 * TODO: por valor vs por referencia
 */