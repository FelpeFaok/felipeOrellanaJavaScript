let nombre = prompt("Ingrese su nombre");
let edad = Number(prompt("Ingresa tu edad"));
let peso = Number(prompt("Ingresa tu peso en kilos"));
let altura = parseFloat(prompt("Ingresa tu altura en metros y con ."));
imc = peso / altura ** 2;

while (altura <= 2) {
    if (edad < 18) {
        alert(`${nombre} tienes que ser mayor de 17 años para participar`);
        break;
    }
    switch (true) {
        case imc < 25:
            alert(`${nombre} tu Imc es: ${imc} y califica como Normal`);
            break;
        case imc < 30:
            alert(`${nombre} tu Imc es: ${imc} y califica como Sobrepeso`);
            break;
        case imc >= 30:
            alert(`${nombre} tu Imc es: ${imc} y califica como Obesidad`);
            break;
        default:
            alert("DATOS MAL INGRESADOS");
            break;
    }
    break;
}