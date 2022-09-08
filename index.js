// funciones 
const saludar = (nombre) => {
  if(nombre === `${nombre}`){
    return `Hola ${nombre}`;
  }
}


// crear usuario dentro de "cardUsuario" y visualizarlo
let ingreso = document.getElementById("usuario");
class Usuario {
  constructor(nombre, email, clave) {
    this.nombre = nombre;
    this.email = email;
    this.clave = clave;
  }
}
const cardUsuarios = [];
let consulta1 = prompt("Desea Registrarse? ingrese 1");
if (consulta1 === "1") {
  for (let i = 0; i < 1; i++) {
    let nombre = prompt("Ingrese su nombre");
    let email = prompt("Ingrese su email");
    let clave = prompt("Ingrese su clave");
    let usuario = new Usuario(nombre, email, clave);
    cardUsuarios.push(usuario);
    let saludo = saludar(nombre);
    alert( saludo);
  }
} else {
  alert("no se a registrado");
}
for (const tarjeta of cardUsuarios) {
  let presentacion = document.createElement("div");
  presentacion.innerHTML = `<h2>Nombre: ${tarjeta.nombre}</h2>
                      <p>Mail: ${tarjeta.email}</p>`;

  ingreso.append(presentacion);
}

// crear elementos dentro de "card" y visualizarlo
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

console.log(productos);

for (const cards of productos) {
  let item = document.createElement("div");
  item.innerHTML = `<h2>ID: ${cards.id}</h2>
                      <p>Producto: ${cards.nombre}</p>
                      <img src="${cards.url}"/>
                      <b>$${cards.precio}</b>`;

  contenedor.append(item);
}
