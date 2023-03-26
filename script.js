
const quote = [
    {
        frase:
            "haz el amor y no la guerra.",
        autor: "- john lennon"
    },
    {
        frase:
            "Cada dia sabemos más y entendemos menos.",
        autor: "- Alber Einstein"
    },
    {
        frase:
            "La medida del amor es amar sin medida.",
        autor: "- San Agustin"
    },
    {
        frase:
            "no hay nada que un hombre no sea capaz de hacer cuando una mujer le mira.",
        autor: "- Casanova"
    },
    {
        frase:
            "El dinero no puede comprar la vida.",
        autor: "- Bob Marley"
    }
];

const btn = document.getElementById("generate-btn");

btn.addEventListener("click",() =>{
    let ramdon = Math.floor(Math.random() * quote.length);
    // console.log(ramdon);
    document.getElementById("frase").textContent = quote[ramdon].frase;
    document.getElementById("autor").textContent = quote[ramdon].autor;
})