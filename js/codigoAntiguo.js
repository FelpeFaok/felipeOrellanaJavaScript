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
// --------------------------------------------
// Mas codigo antiguo

// // ecommerce
// let nombre = [];
// console.log(nombre);
// let usuario = document.getElementById("usuario");
// let formularioUsuario = document.getElementById("formularioUsuario");
// let contenedor = document.getElementById("contenedor");
// formularioUsuario.addEventListener("submit", (e) => {
//   e.preventDefault();
//   usuario.innerHTML = "";
//   contenedor.innerHTML = "";
//   let inputs = e.target.children;
//   nombre.push(inputs[0].value);

// // crea html para edentificar al usuario  
//   let div = document.createElement("div");
//   div.innerHTML = `<h2>Nombre: ${inputs[0].value}</h2>
//                   <p>Mail: ${inputs[1].value}</p>`;
//   usuario.append(div);

//   // crear boton para agrear productos
//   let button = document.createElement(`button`);
//   button.innerHTML = `Agreagr Producto`;
//   button.type = `button`;
//   button.onclick = agregarProducto;
//   contenedor.append(button);
  
//   //seteo a 0 
//   inputs[0].value = "";
//   inputs[1].value = "";
//   inputs[2].value = "";


//   // saluda al usuario
//   nombre.forEach((item) => {
//     alert(`Bienvenido ${item}`)   
//     }
//   );
//   });

//   // funcion para agreagra productos por medio de prompt
//   const agregarProducto = () => {
//     let contenedor = document.getElementById("contenedor");
//     let numProducto = prompt("Ingrese cantidad de productos a ingresar");
//     class Producto {
//       constructor(id, nombre, url, precio) {
//         this.id = id;
//         this.nombre = nombre;
//         this.url = url;
//         this.precio = precio;
//       }
//     }
//     const productos = [];
//     for (let i = 0; i < numProducto; i++) {
//       let id = prompt("Ingrese id de su producto");
//       let nombre = prompt("Ingrese nombre de su producto");
//       let url = prompt("Ingrese url de la imagen del producto");
//       let precio = prompt("Ingrese precio de su producto");
//       let card = new Producto(id, nombre, url, precio);
//       productos.push(card);
//     }
//     for (const cards of productos) {
//       let item = document.createElement("div");
//       item.innerHTML = `<h2>ID: ${cards.id}</h2>
//                           <p>Producto: ${cards.nombre}</p>
//                           <img src="${cards.url}"/>
//                           <b>$${cards.precio}</b>`;

//       contenedor.append(item);
//     }
//   }



/////------------------------------------
// class Producto {
//     constructor(id, nombre, precio, foto) {
//         this.id = id;
//         this.nombre = nombre;
//         this.precio = precio;
//         this.foto = foto;
//     }
//   }
  
//   class ElementoCarrito {
//     constructor(producto, cantidad) {
//         this.producto = producto;
//         this.cantidad = cantidad;
//     }
//   }
  
//   // /**
//   // * Definiciones de constantes
//   // */
//   const estandarPesoChileno = new Intl.NumberFormat('es-CL', {currency: "CLP", style: "currency"});
  
//   //Arrays donde guardaremos catálogo de productos y elementos en carrito
//   const productos = [];
//   const elementosCarrito = [];
  
//   const contenedorProductos = document.getElementById('contenedor-productos');
  
//   const contenedorCarritoCompras = document.querySelector("#items")
  
//   const contenedorFooterCarrito = document.querySelector("#footer");
  
//   // Ejecución de funciones
  
//   cargarProductos();
//   dibujarCarrito();
//   dibujarCatalogoProductos();
  
//   // Definiciones de funciones
  
  
//   function cargarProductos() {
//     productos.push(new Producto(1, 'Audifonos', 69000, './img/1024accesorio1.jpg'));
//     productos.push(new Producto(2, 'Teclado', 55000, './img/1024accesorio2.jpg'));
//     productos.push(new Producto(3, 'Mouse Gamer', 23000, './img/1024accesorio3.jpg'));
//     productos.push(new Producto(4, 'Teclado + Mouse', 45000, './img/1024accesorio4.jpg'));
//     productos.push(new Producto(5, 'GeForce RTX 3050', 650000, './img/1024gpu1.jpg'));
//     productos.push(new Producto(6, 'Monitor LED', 199900, './img/1024monitor1.jpg'));
//     productos.push(new Producto(7, 'Monitor UltraWQHD', 250000, './img/1024monitor3.jpg'));
//     productos.push(new Producto(8, 'Monitor Odyssey G3', 270000, './img/1024monitor4.jpg'));
//     productos.push(new Producto(9, 'Audifonos', 79000, './img/1024accesorio6.jpg'));
//     productos.push(new Producto(10, 'Teclado', 50000, './img/1024accesorio5.jpg'));
//     productos.push(new Producto(11, 'Mouse Gamer', 13000, './img/1024gpu2.jpg'));
//     productos.push(new Producto(12, 'Teclado + Mouse', 65000, './img/1024monitor6.jpg'));
//     productos.push(new Producto(13, 'GeForce RTX 3050', 850000, './img/1024gpu3.jpg'));
//     productos.push(new Producto(14, 'Monitor LED', 189900, './img/1024monitor2.jpg'));
//     productos.push(new Producto(15, 'Monitor UltraWQHD', 200000, './img/1024gpu4.jpg'));
//     productos.push(new Producto(16, 'Monitor Odyssey G3', 370000, './img/1024monitor5.jpg'));
//   }
  
//   function dibujarCarrito() {
//     contenedorCarritoCompras.innerHTML = "";
  
//     elementosCarrito.forEach(
//         (elemento) => {
//             let renglonesCarrito= document.createElement("tr");
            
//             renglonesCarrito.innerHTML = `
//                 <td>${elemento.producto.nombre}</td>
//                 <td><input id="cantidad-producto-${elemento.producto.id}" type="number" value="${elemento.cantidad}" min="1" max="1000" step="1" style="width: 50px;"/></td>
//                 <td> ${estandarPesoChileno.format(elemento.producto.precio)}</td>
//                 <td> ${estandarPesoChileno.format(elemento.producto.precio*elemento.cantidad)}</td>
//                 <td><button id="eliminar-producto-${elemento.producto.id}" type="button" class="btn btn-danger"><i class="bi bi-trash-fill"></i></button></td>
                
//             `;
  
//             contenedorCarritoCompras.append(renglonesCarrito);
  
//             //Agregar evento a input de renglón en carrito
//             let inputCantidadProducto = document.getElementById(`cantidad-producto-${elemento.producto.id}`);
//             inputCantidadProducto.addEventListener('change', (ev) => {
//                 let nuevaCantidad = ev.target.value;
//                 elemento.cantidad = nuevaCantidad;
//                 contadorNumeroProducto();  
//                 dibujarCarrito();
//             });
  
  
//             //Agregar evento a eliminar producto
//             let botonEliminarProducto = document.getElementById(`eliminar-producto-${elemento.producto.id}`);
//             botonEliminarProducto.addEventListener('click', () => {
              
//                 let indiceEliminar =  elementosCarrito.indexOf(elemento);
//                 elementosCarrito.splice(indiceEliminar,1);
//                 contadorNumeroProducto();
//                 dibujarCarrito();
//             });
  
  
//         }
//     );
  
//     const valorInicial = 0;
//     const totalCompora = elementosCarrito.reduce(
//         (previousValue, currentValue) => previousValue + currentValue.producto.precio*currentValue.cantidad,
//         valorInicial
//     );
  
//     if(elementosCarrito.length == 0) {
//         contenedorFooterCarrito.innerHTML = `<th scope="row" colspan="6">Carrito vacío!</th>`;
//     } else {
//         contenedorFooterCarrito.innerHTML = `<th scope="row" colspan="6">Total de la compra: ${estandarPesoChileno.format(totalCompora)}</th>`;
//     }
  
//   }
  
//   function removerProductoCarrito(elementoAEliminar) {
//     const elementosAMantener = elementosCarrito.filter((elemento) => elementoAEliminar.producto.id != elemento.producto.id);
//     elementosCarrito.length = 0;
  
//     elementosAMantener.forEach((elemento) => elementosCarrito.push(elemento));
//   }
  
//   function crearCard(producto) {
//     //Botón
//     let botonAgregar = document.createElement("button");
//     botonAgregar.className = "btn btn-success";
//     botonAgregar.innerText = "Agregar";
  
//     //Card body
//     let cuerpoCarta = document.createElement("div");
//     cuerpoCarta.className = "card-body";
//     cuerpoCarta.innerHTML = `
//         <h5>${producto.nombre}</h5>
//         <p> ${estandarPesoChileno.format(producto.precio)} Pesos</p>
//     `;
//     cuerpoCarta.append(botonAgregar);
  
//     //Imagen
//     let imagen = document.createElement("img");
//     imagen.src = producto.foto;
//     imagen.className = "card-img-top";
//     imagen.alt = producto.nombre;
  
//     //Card
//     let carta = document.createElement("div");
//     carta.className = "card m-2 p-2";
//     carta.style = "width: 18rem";
//     carta.append(imagen);
//     carta.append(cuerpoCarta);
  
//     //Contenedor Card
//     //let contenedorCarta = document.createElement("div");
//     //contenedorCarta.className = "col-xs-6 col-sm-3 col-md-2";
//     //contenedorCarta.append(carta);
  
//     //Agregar algunos eventos
//     botonAgregar.onclick = () => {
  
//         let elementoExistente = 
//             elementosCarrito.find((elem) => elem.producto.id == producto.id);
        
//         if(elementoExistente) {
//             elementoExistente.cantidad+=1;
//         } else {
//             let elementoCarrito = new ElementoCarrito(producto, 1);
//             elementosCarrito.push(elementoCarrito);
//         }
       
//         contadorNumeroProducto();
//         dibujarCarrito();
  
//         swal({
//             title: '¡Producto agregado!',
//             text: `${producto.nombre} agregado al carrito`,
//             icon: 'success',
//             buttons: {
//                 cerrar: {
//                     text: "cerrar",
//                     value: false
//                 },
//                 carrito: {
//                     text: "ir a carrito",
//                     value: true
//                 }
//             }
//         }).then((decision) => {
//             if(decision) {
//                 const myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {keyboard: true});
//                 const modalToggle = document.getElementById('toggleMyModal'); 
//                 myModal.show(modalToggle);
//             }
//         });
  
  
//     }
  
//     return carta;
  
//   }
//   const borrarContadorNumero = () => {
  
//   };
//   const contador = document.getElementById(`contador`)
//   const contadorNumeroProducto = () => {
//       const valorContadorInicial = 0;
//       const contadorUnidades = elementosCarrito.reduce(
//           (previousValue, currentValue) => previousValue + currentValue.producto.precio*currentValue.cantidad/currentValue.producto.precio,
//          valorContadorInicial
//         );
      
//       if( elementosCarrito.length != 0){
//         contador.innerHTML="";
//         let div = document.createElement("div");
//         div.innerHTML= `<p>${contadorUnidades}</p>`;
//         contador.append(div);
//       }  else {
//           contador.innerHTML="";
//       }  
  
//   };
  
//   function dibujarCatalogoProductos() {
//     contenedorProductos.innerHTML = "";
  
//     productos.forEach(
//         (producto) => {
//             let contenedorCarta = crearCard(producto);
//             contenedorProductos.append(contenedorCarta);
//         }
//     );
//   }