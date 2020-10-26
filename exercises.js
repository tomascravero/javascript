/*  1) Variables y Operadores
    a) Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable. */

var x = 10;
var y = 15;
var z = x + y;
console.log("The result of the sum is: ", z);

/* b) Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable. */

var txt1 = "Hi! ";
var txt2 = "How are you?";
var phrase = txt1.concat(txt2);
console.log (phrase);

/* c) Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) 
    guardando el resultado la suma una 3er variable (utilizar length). */

var $text1 = "Learning Javascript";
var $text2 = "with Radium Rocket";
var large = 0;
for (var i=0; i<$text1.length; i++) {
    if ($text1[i] != " "){
        large++;
    }
}
for (var k=0; k<$text2.length; k++){
    if ($text2[k] != " "){
        large++;
    }
}
console.log ("Length: ", large);

/* 2) Strings
    a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).  */

var _txt1 = "This is a text with at least 10 characters";
console.log(_txt1.toUpperCase());

/* b) Crear una variable de tipo string con al menos 10 caracteres y 
    generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring). */

var $t1 = "Description";
var fiveC = $t1.substring(0,5);
console.log(fiveC, "are the first 5 characters of: ", $t1);

/* c) Crear una variable de tipo string con al menos 10 caracteres y 
generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring). */

var newT1 = "Programming";
var last3 = newT1.substring(8,11);
console.log(last3, "are the last 3 characters of: ", newT1);

/* d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y
    las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +). */

var $textN = "pROGRammIng";
var capitalize = $textN.substring(0,1).toUpperCase() + $textN.substring(1).toLowerCase();
console.log("These is the text: ", $textN, "to capitalize: ", capitalize);

/* e) Crear una variable de tipo string con al menos 10 caracteres y 
    algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf). */

var _text = "Programming in Javascript";
var space = _text.indexOf(" ", 0);
console.log("The first space is in the position: ", space);


/* f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y 
las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +) */

var _words = "techNOLOgy coMMUnication";
var space = _words.indexOf(" ");
var palabra = _words.substring(0,1).toUpperCase() + _words.substring(1, space).toLowerCase() + _words.substring(space,space+1) + _words.substring(space+1,space+2).toUpperCase() + _words.substring(space+2).toLowerCase();
console.log(palabra);

/* 3) Arrays 
    a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] 
    mostrar por consola los meses 5 y 11 (utilizar console.log) */

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("Month N° 5:", months[5]);
console.log("Month N° 11:", months[11]);

/* b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort). */

console.log("The list sorted alphabetically", months.sort());

/* c) Agregar un elemento al principio y al final del array (utilizar unshift y push). */

console.log(months.unshift("Year"), months.push("New Year"));

/* d) Quitar un elemento del principio y del final del array (utilizar shift y pop). */

console.log(months.shift(), months.pop());

/* e) Invertir el orden del array (utilizar reverse) */

console.log("Array inverted: ", months.reverse());

/* f) Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join). */

var $arrayJ = months.join("-");
console.log($arrayJ);

/* g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice). */

var monthsArray = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var monthsNew = monthsArray.slice(4,11);
console.log("Array from May to November: ", monthsNew);

/* 4 ) If Else 
    a) Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), 
    si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” 
    y sino un alerta con el mensaje “Lower than 0,5” */

var num = Math.random(0,1);
if (num>=0,5){
   alert("Greater than 0,5");
}else{
    alert("Lower than 0,5");
}

/* b) Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
    i)“Bebe” si la edad es menor a 2 años
    ii) “Nino” si la edad es entre 2 y 12 años
    iii) “Adolecente” si la edad es entre 13 y 19 años
    iv) “Joven” si la edad está entre 20 y 30 años
    v) “Adulto” entre 31 y 60 años
    vi) “Adulto mayor” entre 61 y 75 años
    vii) “Anciano” si es mayor a 75 años
 */

 var Age = 55;
if (Age < 2){
    alert("Bebé");
}else if ((Age > 2) && (Age < 12)){
    alert("Niño");
}else if ((Age > 13) && (Age < 19)){
    alert("Adolescente");
}else if ((Age > 20) && (Age < 30)){
    alert("Joven");
}else if ((Age > 31) && (Age < 60)){
    alert("Adulto");
}else if ((Age > 61) && (Age < 75)){
    alert("Adulto Mayor");
}else if (Age > 75){
    alert("Anciano");
}

/* 5) FOR 
    a) Crear un array que contenga 5 palabras y recorrer dicho array utilizando
    un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras. */

var fruits = ["apple", "pear", "banana", "strawberry", "peach"];
for (let h=0; h<fruits.length; h++){
    alert(fruits[h]);
}

/* b) Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada. */

for (let h=0; h<fruits.length; h++){
    fruits[h] = fruits[h].substring(0,1).toUpperCase() + fruits[h].substring(1);
    alert(fruits[h]);
}

/* c) Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto 
    a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence.
    Al final mostrar una única alerta con la cadena completa. */

var sentence = [];
for (let h=0; h<fruits.length; h++){
    sentence[h] = fruits[h];
}
alert(sentence);

/* d) Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con el número de la repetición, 
    es decir que al final de la ejecución del bucle for deberia haber 10 elementos dentro del array, desde el número 0 hasta al numero 9.
    Mostrar por la consola del navegador el al array final (utilizar console.log). */

var empty = [];
for (let h=0; h<10; h++){
    empty[h] = h + 1;
}
console.log(empty);

/* 6) Funciones 
    a) Crear una función suma que reciba dos valores numéricos y retorne el resultado.
    Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador. */

/*function suma(num1, num2){
    return num1 + num2;
}
_sumatoria = suma(5,10);
console.log(_sumatoria); */

/* b) A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, 
    mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado. */

/*function suma(num1, num2){
    if (isNaN(num1) || isNaN(num2)){
        return "NaN";
    }else{
        return num1 + num2;
    }
}
_sumatoria = suma("H",10);
console.log(_sumatoria);*/

/* c) Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero. */

function validateInteger(x){
    if (x % 1 == 0) {
        return "Es un numero entero";
    } else {
        return "Es un numero decimal";
    }
}

var num5 = validateInteger(5.1);
console.log(num5);




