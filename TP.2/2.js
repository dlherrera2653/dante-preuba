// 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

// 0-2: Muy deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
// 7: Bien
// 8-9: Notable
// 10: Sobresaliente

// Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar

//el mensaje “Introduce un número válido”.
// Ejemplo:



// Input: 5
// Input: 50
// Input: hola10
// Output: Suficiente
// Output: Número erróneo
// Output: Introduce un número válido

let nota = parseInt(prompt(' ingrese una nota:'));
if (nota >= 0 && 2 >= nota) {
    alert('muy deficiente')

} else if (nota >= 3 && 4 >= nota) {
    alert(`Insuficente`)
} else if (nota >= 5 && 6 >= nota) {
    alert(`Suficiente`)
} else if (nota >= 7 && 7>= nota) {
    alert(`bien`)
} else if (nota >= 8 && 9 >= nota) {
    alert(`notable`)
} else if (nota >= 10 && 10 >= nota) {
    alert(`Sobrasaliente `)
} else if (nota >= 11 ){
    alert('número erróneo')
}else{
    alert('introduce un número valido')
}