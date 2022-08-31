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



// ingreso de datos usuario

let consulta1 = prompt("Desea Registrarse? ingrese 1");

if (consulta1 = 1){
    class Usuario{
        constructor(nombre, email, clave){
            this.nombre = nombre;
            this.email = email;
            this.clave = clave;       
        }
    }
    const usuario = [];

    for (let i = 0; i < 1; i++) {

        let nombre = prompt("Ingrese su nombre");
        let email = prompt("Ingrese su email");
        let clave = prompt("Ingrese su clave");
        let usuarios = new Usuario(nombre, email, clave);
        productos.push(usuarios);
    }
}
    console.log(usuario);

// ingreso de datos para productos

let consulta2 = prompt("Desea agregar 5 productos? introdusca la tecla 1");

if (consulta1 = 1){
    class Producto{
        constructor(img, precio, nombreProducto){
            this.img = img;
            this.precio = precio;
            this.nombreProducto = nombreProducto;       
        }
    }

    const productos = [];

    for (let i = 0; i < 5; i++) {

        let img = prompt("Ingrese HTML de su producto");
        let precio = prompt("Ingrese precio de su producto");
        let nombre = prompt("Ingrese nombre de su producto");
        let card = new Producto(img, precio, nombre);
        productos.push(card);
    }
}
console.log(productos);
