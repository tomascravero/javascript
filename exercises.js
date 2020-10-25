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

/*  */


