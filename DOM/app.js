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

