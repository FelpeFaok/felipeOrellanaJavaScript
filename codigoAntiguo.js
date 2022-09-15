// calculadora IMC
// let nombre = prompt("Ingrese su nombre");
// let edad = Number(prompt("Ingresa tu edad"));
// let peso = Number(prompt("Ingresa tu peso en kilos"));
// let altura = parseFloat(prompt("Ingresa tu altura en metros y con ."));
// imc = peso / altura ** 2;

// while (altura <= 2) {
//     if (edad < 18) {
//         alert(`${nombre} tienes que ser mayor de 17 años para participar`);
//         break;
//     }
//     switch (true) {
//         case imc < 25:
//             alert(`${nombre} tu Imc es: ${imc} y califica como Normal`);
//             break;
//         case imc < 30:
//             alert(`${nombre} tu Imc es: ${imc} y califica como Sobrepeso`);
//             break;
//         case imc >= 30:
//             alert(`${nombre} tu Imc es: ${imc} y califica como Obesidad`);
//             break;
//         default:
//             alert("DATOS MAL INGRESADOS");
//             break;
//     }
//     break;
// }
// // ingreso de datos usuario
// let consulta1 = prompt("Desea Registrarse? ingrese 1");
// if (consulta1 === "1"){
//     class Usuario{
//         constructor(nombre, email, clave){
//             this.nombre = nombre;
//             this.email = email;
//             this.clave = clave;
//         }
//     }
//     const usuario = [];

//     for (let i = 0; i < 1; i++) {

//         let nombre = prompt("Ingrese su nombre");
//         let email = prompt("Ingrese su email");
//         let clave = prompt("Ingrese su clave");
//         let usuarios = new Usuario(nombre, email, clave);
//         usuario.push(usuarios);
//     }
//     console.log(usuario);
// }else{
//     console.log("no se a registrado");
// }

// // ingreso de datos para productos

// let consulta2 = prompt("Desea agregar 5 productos? introdusca la tecla 1");

// if (consulta2 === "1"){
//     class Producto{
//         constructor(img, precio, nombreProducto){
//             this.img = img;
//             this.precio = precio;
//             this.nombreProducto = nombreProducto;
//         }
//     }
//     const productos = [];
//     for (let i = 0; i < 5; i++) {
//         let img = prompt("Ingrese HTML de su producto");
//         let precio = prompt("Ingrese precio de su producto");
//         let nombre = prompt("Ingrese nombre de su producto");
//         let card = new Producto(img, precio, nombre);
//         productos.push(card);
//     }
//     console.log(productos);
// }else{
//     console.log("no a ingresado ningun producto");
// }


// crear usuario dentro de "cardUsuario" y visualizarlo
// let ingreso = document.getElementById("usuario");
// class Usuario {
//   constructor(nombre, email, clave) {
//     this.nombre = nombre;
//     this.email = email;
//     this.clave = clave;
//   }
// }
// const cardUsuarios = [];
// let consulta1 = prompt("Desea Registrarse? ingrese 1");
// if (consulta1 === "1") {
//   for (let i = 0; i < 1; i++) {
//     let nombre = prompt("Ingrese su nombre");
//     let email = prompt("Ingrese su email");
//     let clave = prompt("Ingrese su clave");
//     let usuario = new Usuario(nombre, email, clave);
//     cardUsuarios.push(usuario);
//     let saludo = saludar(nombre);
//     alert( saludo);
//   }
// } else {
//   alert("no se a registrado");
// }
// for (const tarjeta of cardUsuarios) {
//   let presentacion = document.createElement("div");
//   presentacion.innerHTML = `<h2>Nombre: ${tarjeta.nombre}</h2>
//                       <p>Mail: ${tarjeta.email}</p>`;

//   ingreso.append(presentacion);
// }

// crear elementos dentro de "card" y visualizarlo
// let contenedor = document.getElementById("contenedor");
// let numProducto = prompt("Ingrese cantidad de productos a ingresar");
// class Producto {
//   constructor(id, nombre, url, precio) {
//     this.id = id;
//     this.nombre = nombre;
//     this.url = url;
//     this.precio = precio;
//   }
// }

// const productos = [];
// for (let i = 0; i < numProducto; i++) {
//   let id = prompt("Ingrese id de su producto");
//   let nombre = prompt("Ingrese nombre de su producto");
//   let url = prompt("Ingrese url de la imagen del producto");
//   let precio = prompt("Ingrese precio de su producto");
//   let card = new Producto(id, nombre, url, precio);
//   productos.push(card);
// }

// console.log(productos);

// for (const cards of productos) {
//   let item = document.createElement("div");
//   item.innerHTML = `<h2>ID: ${cards.id}</h2>
//                       <p>Producto: ${cards.nombre}</p>
//                       <img src="${cards.url}"/>
//                       <b>$${cards.precio}</b>`;

//   contenedor.append(item);
// }
// funciones 
// const saludar = (nombre) => {
//     if(nombre === `${nombre}`){
//       return `Hola ${nombre}`;
//     }
//   }