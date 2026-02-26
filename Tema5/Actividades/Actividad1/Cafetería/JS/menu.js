function crearSection(cat) {
    const section = document.createElement("section");
    section.innerHTML = `<h2>${cat.nombre}</h2>`;
    cat.producto.forEach(p => {
        const tarjeta = document.createElement("div");
        tarjeta.innerHTML = `
        <a href="./producto.html?cat=${cat.nombre}&id=${p.id}">    
        <div class="item">
        <img src="${p.img}" alt="">
            <ul>
                <li class="name">${p.nombre}</li>
                <li class="desc">${p.desc}</li>
                <li class="price">${p.precio}</li>
            </ul>   
        </div>
        </a>
        `;
        section.appendChild(tarjeta);
    });
    const main = document.getElementById("main");
    main.appendChild(section);
}



fetch("../RES/menu.json")
    .then(response => response.json())
    .then(categorias => {
        const main = document.getElementById("main");
        main.innerHTML = "";
        categorias.categoria.forEach(cat => {
            crearSection(cat);
        });

    });