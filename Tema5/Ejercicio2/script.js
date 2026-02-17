function crearTarjeta(user){
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta";
    tarjeta.innerHTML = `<p>Nombre : ${user.name}</p>
      <p>Nombre Usuario :  ${user.username}</p>
      <p>Email : ${user.email}</p>
      <p>Dirección : </p>
      <ul> <li> Calle : ${user.address.street}</li>
      <li> Suite : ${user.address.suite}</li>
      <li> City : ${user.address.city}</li>
      <li> Zipcode : ${user.address.zipcode}</li>
      <li> Localización : <ul>
      <li> Latitud : ${user.address.geo.lat}</li>
      <li> Longitud : ${user.address.geo.lng}</li> </ul> </li> </ul>
      <p>tlf : ${user.phone}</p>
      <p>website : ${user.website}</p>
      <p>company : ${user.company.name}</p>`;
    
    document.getElementById("contenedor").appendChild(tarjeta);
}

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(users => {
    users.forEach(user => {
        crearTarjeta(user);
    });
    
});