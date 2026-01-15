// Botón para cambiar el color
document.getElementById("cambiaColor").addEventListener("click", () => {
    document.querySelector("body").style.backgroundColor = "red";
});



// Cambiar con select el tamaño del parrafo
let select = document.getElementById("parrafoSizeChanger")
select.addEventListener("change" , ()=>{
    document.querySelector("p").style.fontSize = select.value;
});



// Cambiar el titulo con el text input
let input = document.getElementById("tituloChanger");
input.addEventListener("keyup", ()=> {
    document.getElementById("titulo").innerHTML = input.value;
});



// Cambiar el borde dle formulario.
document.getElementById("formulario").addEventListener("mouseover", () => {
    document.getElementById("formulario").style.border = "5px solid yellow";

});
document.getElementById("formulario").addEventListener("mouseout", () => {
    document.getElementById("formulario").style.border = "0px solid yellow";
});

