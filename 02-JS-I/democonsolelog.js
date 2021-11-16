var nombre = "Juan";
nombre = "Diego"
nombre = "Juan Diego" 
var apellido1 = "Vidal";
var apellido2 = "Ortiz";

const PI = 3.111111;
const PI2 = 3.1416

let edad = 28;
var booleano1 = true;
var booleano2 = false;
var datoNulo = undefined; 

console.log("1) Presentación");

console.log("2) Mi nombre es: ", nombre);
console.log("3) Mi apellido es: ", apellido1);
console.log("4) Mi segundo apellido es: ", apellido2);

console.log("5) Mi nombre completo es: ", nombre, apellido1, apellido2);

console.log("6) edad: ", edad);
console.log("7) El numero PI es un error porque no es: ", PI, booleano1);
console.log("8) El valor correcto del numero PI es: ", PI2, booleano1);


console.log("Presentación =", booleano2, "porque el valor de PI sea = ", PI, "o", PI2, "NO HACE PARTE de una Presentación.");

console.log("Explicación", booleano2, "porque:")

console.log("Presentación incluye:");
console.log(".Nombre completo")
console.log(".Edad")
console.log(".Profesión")
console.log(".Experiencia")
console.log(".Datos de interés (logros y hobbies)")

console.log("En ningún momento el valor de PI hace parte de una presentación, entonces Presentación =", 
booleano2);

console.log("Porque Explicación = ", booleano1, "puesto que demostración de ", booleano2, "=", booleano1);
console.log("Y, señalando que Profesion =", datoNulo, "Experiencia = ", datoNulo, "Datos de interes =", datoNulo);
console.log("Podemos concluir que Presentación = ", booleano2);


