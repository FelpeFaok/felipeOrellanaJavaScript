// Definiciones de constantes
const estandarPesoChileno = new Intl.NumberFormat('es-CL', {currency: "CLP", style: "currency"});
const elementosCarrito = [];
const elementosUsuario = [];
const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarritoCompras = document.querySelector("#items")
const contenedorFooterCarrito = document.querySelector("#footer");


// cargar elementos desde una "api"
const traerDatos = async () => {
    try{
    const response = await fetch("./js/data.json");
    const productos = await response.json();

    // funcion para crear catalogo 
    function dibujarCatalogoProductos() {
        contenedorProductos.innerHTML = "";
        productos.forEach(
            (producto) => {
                let contenedorCarta = crearCard(producto);
                contenedorProductos.append(contenedorCarta);
            }
        );
        };
    }catch (error) {
        console.log(error);
        };
    dibujarCatalogoProductos();
    }

    class ElementoCarrito {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
}

const precargarCarrito = () => {
    let carritoLocalStorage = localStorage.getItem("carritoIncrostore");
    if(carritoLocalStorage) {
        let arrayCarritoJson = JSON.parse(carritoLocalStorage)
        arrayCarritoJson.forEach(elementoJson => {
            let elemento = new ElementoCarrito(elementoJson.producto, elementoJson.cantidad);
            elementosCarrito.push(elemento);
            
        });
        
        dibujarCarrito();
        contadorNumeroProducto();
    }
}

// Definiciones de funciones
function dibujarCarrito() {
    contenedorCarritoCompras.innerHTML = "";

    elementosCarrito.forEach(
        (elemento) => {
            let renglonesCarrito= document.createElement("tr");
            
            renglonesCarrito.innerHTML = `
                <td>${elemento.producto.nombre}</td>
                <td><input id="cantidad-producto-${elemento.producto.id}" type="number" value="${elemento.cantidad}" min="1" max="1000" step="1" style="width: 50px;"/></td>
                <td> ${estandarPesoChileno.format(elemento.producto.precio)}</td>
                <td> ${estandarPesoChileno.format(elemento.producto.precio*elemento.cantidad)}</td>
                <td><button id="eliminar-producto-${elemento.producto.id}" type="button" class="btn btn-danger"><i class="bi bi-trash-fill"></i></button></td>
                
            `;
            contenedorCarritoCompras.append(renglonesCarrito);

            //Agregar evento a input de renglón en carrito
            let inputCantidadProducto = document.getElementById(`cantidad-producto-${elemento.producto.id}`);
            inputCantidadProducto.addEventListener('change', (ev) => {
                let nuevaCantidad = ev.target.value;
                elemento.cantidad = nuevaCantidad;
                contadorNumeroProducto();  
                dibujarCarrito();
                localStorage.setItem("carritoIncrostore", JSON.stringify(elementosCarrito));
            });

            //Agregar evento a eliminar producto
            let botonEliminarProducto = document.getElementById(`eliminar-producto-${elemento.producto.id}`);
            botonEliminarProducto.addEventListener('click', () => {
                
                let indiceEliminar =  elementosCarrito.indexOf(elemento);
                elementosCarrito.splice(indiceEliminar,1);
                contadorNumeroProducto();
                dibujarCarrito();
                localStorage.setItem("carritoIncrostore", JSON.stringify(elementosCarrito)); 
            });
        }
    );

    const valorInicial = 0;
    const totalCompora = elementosCarrito.reduce(
        (previousValue, currentValue) => previousValue + currentValue.producto.precio*currentValue.cantidad,
        valorInicial
    );

    if(elementosCarrito.length == 0) {
        contenedorFooterCarrito.innerHTML = `<th scope="row" colspan="6">Carrito vacío!</th>`;
    } else {
        contenedorFooterCarrito.innerHTML = `<th scope="row" colspan="6">Total de la compra: ${estandarPesoChileno.format(totalCompora)}</th>`;
    }

}

const removerProductoCarrito = (elementoAEliminar) => {
    const elementosAMantener = elementosCarrito.filter((elemento) => elementoAEliminar.producto.id != elemento.producto.id);
    elementosCarrito.length = 0;

    elementosAMantener.forEach((elemento) => elementosCarrito.push(elemento));
    }
    const crearCard = (producto) => {

    //Botón
    let botonAgregar = document.createElement("button");
    botonAgregar.className = "btn btn-success";
    botonAgregar.innerText = "Agregar";

    //Card body
    let cuerpoCarta = document.createElement("div");
    cuerpoCarta.className = "card-body";
    cuerpoCarta.innerHTML = `
        <h5>${producto.nombre}</h5>
        <p> ${estandarPesoChileno.format(producto.precio)} Pesos</p>
    `;
    cuerpoCarta.append(botonAgregar);

    //Imagen
    let imagen = document.createElement("img");
    imagen.src = producto.foto;
    imagen.className = "card-img-top";
    imagen.alt = producto.nombre;

    //Card
    let carta = document.createElement("div");
    carta.className = "card m-2 p-2";
    carta.style = "width: 18rem";
    carta.append(imagen);
    carta.append(cuerpoCarta);

    //Agregar algunos eventos
    botonAgregar.onclick = () => {

        let elementoExistente = 
            elementosCarrito.find((elem) => elem.producto.id == producto.id);
        
        if(elementoExistente) {
            elementoExistente.cantidad+=1;
        } else {
            let elementoCarrito = new ElementoCarrito(producto, 1);
            elementosCarrito.push(elementoCarrito);
        }
        localStorage.setItem("carritoIncrostore", JSON.stringify(elementosCarrito));
        contadorNumeroProducto();
        dibujarCarrito();

        swal({
            title: '¡Producto agregado!',
            text: `${producto.nombre} agregado al carrito`,
            icon: 'success',
            buttons: {
                cerrar: {
                    text: "cerrar",
                    value: false
                },
                carrito: {
                    text: "ir a carrito",
                    value: true
                }
            }
        }).then((decision) => {
            if(decision) {
                const myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {keyboard: true});
                const modalToggle = document.getElementById('toggleMyModal'); 
                myModal.show(modalToggle);
            }
        });
    };
    return carta;
    };

//Contador de unidades en el carrito
const contador = document.getElementById(`contador`)
const contadorNumeroProducto = () => {
    const valorContadorInicial = 0;
    const contadorUnidades = elementosCarrito.reduce(
        (previousValue, currentValue) => previousValue + currentValue.producto.precio*currentValue.cantidad/currentValue.producto.precio,
        valorContadorInicial
        );
        
        if( elementosCarrito.length != 0){
        contador.innerHTML="";
        let div = document.createElement("div");
        div.innerHTML= `<p>${contadorUnidades}</p>`;
        div.id = "contadorCarrito";
        contador.append(div);
        }  else {
            contador.innerHTML="";
        }  
    };

    // Ejecución de funciones
traerDatos();
dibujarCarrito();


