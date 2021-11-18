//Delegation
const container = document.querySelector(".container");

container.addEventListener("click", (e) => {
    if (e.target.matches("#padre")) {
        console.log("diste click en el padre");
    }

    if (e.target.matches("#hijo")) {
        console.log("diste click en el hijo");
    }

    if (e.target.matches("#nieto")) {
        console.log("diste click en el nieto");
    }
})