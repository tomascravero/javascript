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
