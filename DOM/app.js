//querySelector
console.log(document.querySelector("h1"));
console.log(document.querySelector(".text-primary"));
console.log(document.querySelector("#tituloWeb"));

// all text-danger
console.log(document.querySelectorAll(".text-danger"));

// all in container
console.log(document.querySelectorAll(".container .text-danger"));

//Elements
const h1 = document.querySelector("#tituloWeb");

console.log(h1.className);
console.log(h1.id);
console.log(h1.style);
console.log(h1.tagName);
console.log(h1.textContent);

//Events
const boton = document.querySelector("#button");
const parrafo = document.querySelector("#parrafo");

boton.addEventListener("click", () => {
    parrafo.textContent = "Nuevo texto desde evento";
});

//createElement and appendChild
const listaDinamica = document.querySelector("#listaDinamica");

const li = document.createElement("li");
li.textContent = "item desde javascript";

listaDinamica.appendChild(li);

/**
 * Fragment
 * 
 * TODO: translate to english.
 * 
 * *new DocumentFragment()
 * *createDocumentFragment()
 * 
 * *La interfaz DocumentFragment representa un objeto de documento mínimo que no tiene padre.
 * *Se utiliza como una versión ligera de Document que almacena un segmento de una estructura de documento compuesta de nodos como un documento estándar.
 * *La gran diferencia se debe al hecho de que el fragmento de documento no forma parte de la estructura de árbol del documento activo.
 * *Los cambios realizados en el fragmento no afectan el documento (incluso en reflow) ni inciden en el rendimiento cuando se realizan cambios.
*/

const countries = ["Perú", "Bolivia", "Colombia"];

const fragment = document.createDocumentFragment();

countries.forEach((country) => {
    const li = document.createElement("li");
    li.textContent = country;
    fragment.appendChild(li);
});

listaDinamica.appendChild(fragment);

/**
 * Template
 * 
 * TODO: translate to english.
 * 
 * *Es un mecanismo para mantener el contenido HTML del lado del cliente que no se renderiza cuando se carga una página, pero que posteriormente puede ser instanciado durante el tiempo de ejecución empleando JavaScript.
 * *Piensa en la plantilla como un fragmento de contenido que está siendo almacenado para un uso posterior en el documento.
 * *El analizador procesa el contenido del elemento <template> durante la carga de la página, pero sólo lo hace para asegurar que esos contenidos son válidos; sin embargo, estos contenidos del elemento no se renderizan.
 * *Los elementos <template> contienen un DocumentFragment en su propiedad HTMLTemplateElement.content.
*/

const secondFragment = document.createDocumentFragment();
const liTemplate = document.querySelector("#liTemplate");
const clickCountry = (e) => console.log("evento:", e.target);

countries.forEach((country) => {
    const clone = liTemplate.content.firstElementChild.cloneNode(true);
    clone.querySelector("span").textContent = country;
    clone.addEventListener("click", clickCountry);

    secondFragment.appendChild(clone);
});

listaDinamica.appendChild(secondFragment);