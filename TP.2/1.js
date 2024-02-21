// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede 
//conducir, si la edad ingresada no es un número válido indicarlo en un mensaje

let edad = parseInt(prompt('ingrese su edad:'));
if (edad >= 18) {
    alert(`ya puede conducir`);
}
else if (edad <= 18) {
    alert(`edad ingreasada no válida`);
} else {
    alert(`ingresó un caracter incorrecto`)
}

