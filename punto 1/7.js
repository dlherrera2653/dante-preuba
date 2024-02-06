let num1,num2,num3 = 
num1 = parseInt(prompt('Ingres un numero:'));
num2 = parseInt(prompt('ingrese ingrese otro numero:'))
num3 = parseInt(prompt('ingrese ingrese otro numero:'))
if(num1 > num2 > num3 < num2 < num1  ){
    alert(`El número ${num1} es mayor que ${num2} y que ${num3} `);
} else {
    alert(`El número ${num2} es mayor que ${num1} y que ${num3} `);
}