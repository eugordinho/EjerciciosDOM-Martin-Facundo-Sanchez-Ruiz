const $tituloPrincipal = document.getElementById('titulo')

$tituloPrincipal.innerHTML = "Frutas"

const $headerYFooter = document.querySelectorAll(".colorFondo")

for(let elementos of $headerYFooter){
    elementos.classList.add("bg-orange-500")
}



const $nombreCompleto = document.querySelector('footer p')

$nombreCompleto.textContent += " Martin Facundo Sanchez Ruiz Cohort N53"



const $mainDiv = document.getElementById('contenedor')

function crearCard(fruta) {
    return `<article class="w-[300px]">
    <img class="w-[300px]" src="${fruta.foto}" alt="Foto de parametro ${fruta.nombre}">
    <h2 class="font-semibold text-xl pt-3">${fruta.nombre}</h2>
    <p>${fruta.descripcion}</p>
    </article>`
}

frutas.
forEach(fruta => {
    $mainDiv.innerHTML += crearCard(fruta)
    
});



const $lista = document.getElementById('lista')

$lista.innerHTML = "<h1>Frutas dulces</h1>"

const $ul = document.createElement("ul")

$lista.appendChild($ul)

const frutaDulce = frutas.filter(fruta => fruta.esDulce == true)

frutaDulce.forEach(fruta => {
    const $li = document.createElement("li")
    $li.textContent = fruta.nombre
    $li.classList.add("list-disc")
    $ul.appendChild($li)
})

const $elementosLista = document.querySelectorAll('#lista')