document.getElementById("darkMode").addEventListener("click", () => {
    i = document.querySelector("head").querySelector("link").href.valueOf("href");
    if (i.includes("styles.css")) {
        document.querySelector("head").querySelector("link").href = "../CSS/oscuro.css";
        document.getElementById("darkMode").innerHTML = "<img src='../RES/darkMode.png' alt='ModoOscuro'>";
        if (document.getElementById("colorUpdater").value == "default") { document.querySelector("body").style.backgroundColor = "#1A121A"; }
    } else {
        document.querySelector("head").querySelector("link").href = "../CSS/styles.css";
        document.getElementById("darkMode").innerHTML = "<img src='../RES/lightMode.png' alt='ModoOscuro'>";
        if (document.getElementById("colorUpdater").value == "default") { document.querySelector("body").style.backgroundColor = "#fdf"; }
    }

})


function updatePage() {
    document.getElementById("updatePage").addEventListener("click", () => {
        title = document.getElementById("titleUpdater").value;
        bgcolor = document.getElementById("colorUpdater").value;
        if (bgcolor == "default") {
            if (document.querySelector("head").querySelector("link").href.valueOf("href").includes("styles.css")) {
                bgcolor = "#fdf";
            } else {
                bgcolor = "#1A121A";
            }
        }

        document.getElementById("title").innerHTML = title;
        document.querySelector("body").style.backgroundColor = bgcolor;
    })
}

document.getElementById("updatePage").addEventListener("click", () => {
    title = document.getElementById("titleUpdater").value;
    if (title == "") { console.log("El titulo no puede estar vacío"); title = "Pastelería Dulce"; }
    bgcolor = document.getElementById("colorUpdater").value;
    if (bgcolor == "default") {
        if (document.querySelector("head").querySelector("link").href.valueOf("href").includes("styles.css")) {
            bgcolor = "#fdf";
        } else {
            bgcolor = "#1A121A";
        }
    }

    document.getElementById("title").innerHTML = title;
    document.querySelector("body").style.backgroundColor = bgcolor;
})


productImg = [];
productDesc = ["Muerte por chocolate amai que rico", "Galletita oreo amai que rico", "Chips Ahoy con pepitas y todo amai que rico", "¿¡Heladito de limon en un limon!?"];
productName = ["Muerte por chocolate","Oreo","Chips Ahoy","Lemonchelo"]
for (i = 0; i < 4; i++) {
    productImg[i] = "../RES/" + i + ".jpg"
}

img = 0;
document.getElementById("carrusel").addEventListener("click", () => {
    if (img < productImg.length - 1) {
        img++;
    } else { img = 0; }
    productUpdater(img);
})

function imgCada5(){
    if (img < productImg.length - 1) {
        img++;
    } else { img = 0; }
    productUpdater(img);
}

let intervalo = setInterval(imgCada5, 5000)

function productUpdater(product) {
    document.getElementById("carrusel").src = productImg[product];
    document.getElementById("productDesc").innerHTML = productDesc[product];
    img = product;
    clearInterval(intervalo);
    intervalo = setInterval(imgCada5, 5000);
}

productInput = "";
document.getElementById("producto").addEventListener("keyup", () => { //Actualiza la variable productoName y se la asigna al p que sustituye el contenido
    productInput = document.getElementById("producto").value;
    document.getElementById("currentText").innerHTML = productInput;

})
document.getElementById("productoSubmit").addEventListener("click", () => { // cuando se submittea se comprueba el contenido y se llama a productUpdater con el id de producto correspondiente.
    switch (productInput) {
        case "Muerte por chocolate":
            productUpdater(0);
            
            return;
        case "Oreo":
            productUpdater(1);
            return;
        case "Chips Ahoy":
            productUpdater(2);
            return;
        case "Lemonchelo":
            productUpdater(3);
            return;
        default:
            return;
    }
})

function placeholder() {
    for (i = 0 ; i < productName.length ; i++){
        if ( productName[i].star(productInput.star) )

            productName[i].star(productInput.star)
    }
}

/*Continuación del ejercicio 4.

Crear una nueva funcionalidad a la página web que permita mostrar la imagen y la descripción de un producto introducido por un input de tipo texto.
Además se pide que conforme se vaya escribiendo el nombre muestre en su placeholder la palabra completa sugerida, ejemplo:

input : m    -> manzana

input : mi   -> miel

input : mil  -> milhojas


Como se aprecia en el anterior ejemplo solo se muestra una única sugerencia (la primera que encuentre coincidente)*/