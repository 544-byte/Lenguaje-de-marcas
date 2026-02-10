const personas = [
    { nombre: "Juan", edad: 15, coche: "rojo" },
    { nombre: "María", edad: 30, coche: "rojo" }
];

const cont = document.getElementById("contenedor");
const cabezera = Object.keys(personas[0]);
const fila = document.createElement("tr");
cabezera.forEach(titulo => {
    const th = document.createElement("th");
    th.textContent = titulo;
    console.log(titulo)
    fila.appendChild(th);
});
fila.appendChild()
cont.appendChild(fila);



personas.forEach(p => {
    const fila = document.createElement("tr");
    const content = Object.keys(p);


    content.forEach(atributo => {
        const celda = document.createElement("td");
        celda.textContent = p[atributo];
        fila.appendChild(celda);
    })
    const mayorEdad = document.createElement("td");
    mayorEdad.textContent = `${p.edad >= 18 ? "Mayor de edad" : "Menor de edad"}`
    fila.appendChild(mayorEdad);
    cont.appendChild(fila);
}
)