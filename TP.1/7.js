// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
// Ejemplo: 

// input: 15 , 3, 9


// Output: El 15 es el número más grande

let num1,num2,num3 = 
num1 = parseInt(prompt('Ingres un numero:'));
num2 = parseInt(prompt('ingrese ingrese otro numero:'));
num3 = parseInt(prompt('ingrese ingrese otro numero:'));

if (num1 > num2 ){
    alert(`El número ${num1} es el más grande `);
}
else if (num1 < num2){ 
    alert(`El número ${num2} es el más grande  `);
} else if (num2 > num3 ){
    alert(`El número ${num2} es el más grande `);
} else if ( num2 < num3 ) {
    alert(`El número ${num3} es el más grande `);
} else { 
    alert('ingresó un valor incorrecto')
}