// ecommerce
let nombre = [];
console.log(nombre);
let usuario = document.getElementById("usuario");
let formularioUsuario = document.getElementById("formularioUsuario");
let contenedor = document.getElementById("contenedor");
formularioUsuario.addEventListener("submit", (e) => {
  e.preventDefault();
  usuario.innerHTML = "";
  contenedor.innerHTML = "";
  let inputs = e.target.children;
  nombre.push(inputs[0].value);

// crea html para edentificar al usuario  
  let div = document.createElement("div");
  div.innerHTML = `<h2>Nombre: ${inputs[0].value}</h2>
                  <p>Mail: ${inputs[1].value}</p>`;
  usuario.append(div);

  // crear boton para agrear productos
  let button = document.createElement(`button`);
  button.innerHTML = `Agreagr Producto`;
  button.type = `button`;
  button.onclick = agregarProducto;
  contenedor.append(button);
  
  //seteo a 0 
  inputs[0].value = "";
  inputs[1].value = "";
  inputs[2].value = "";


  // saluda al usuario
  nombre.forEach((item) => {
    alert(`Bienvenido ${item}`)   
    }
  );
  });

  // funcion para agreagra productos por medio de prompt
  const agregarProducto = () => {
    let contenedor = document.getElementById("contenedor");
    let numProducto = prompt("Ingrese cantidad de productos a ingresar");
    class Producto {
      constructor(id, nombre, url, precio) {
        this.id = id;
        this.nombre = nombre;
        this.url = url;
        this.precio = precio;
      }
    }
    const productos = [];
    for (let i = 0; i < numProducto; i++) {
      let id = prompt("Ingrese id de su producto");
      let nombre = prompt("Ingrese nombre de su producto");
      let url = prompt("Ingrese url de la imagen del producto");
      let precio = prompt("Ingrese precio de su producto");
      let card = new Producto(id, nombre, url, precio);
      productos.push(card);
    }
    for (const cards of productos) {
      let item = document.createElement("div");
      item.innerHTML = `<h2>ID: ${cards.id}</h2>
                          <p>Producto: ${cards.nombre}</p>
                          <img src="${cards.url}"/>
                          <b>$${cards.precio}</b>`;

      contenedor.append(item);
    }
  }
