fetch("../RES/menu.json")
    .then(response => response.json())
    .then(menu => {
        const param = new URLSearchParams(window.location.search)
        let catNombre = param.get("cat")
        let id = param.get("id")
        let catId;
        menu.categoria.forEach((cat,i) => {
            if (catNombre == cat.nombre){
                catId = i
            }
        });
        const p = menu.categoria[catId].producto[id];
        document.querySelector("body").innerHTML = ` 
        <a href="./menu.html">VOLVER</a>
        <section>
        <div>
        <div class="item">
        <img src="${p.img}" alt="">
            <ul>
                <li class="name">${p.nombre}</li>
                <li class="desc">${p.desc}</li>
                <li class="price">${p.precio}</li>
            </ul>   
        </div>
        </div>
        </a>
        </section>
        `;

        });


