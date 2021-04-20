// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  // var arrayAcumulador=[]--------------------------------------------------
  // var arrayFinal=[]

  // for (let a in objeto){
  //   arrayAcumulador.push(a,objeto[a])
  //   arrayFinal.push(arrayAcumulador)
  //   arrayAcumulador=[]
  // }
  // return arrayFinal
  var array = [];
  for (let prop in objeto) {
    array.push([prop, objeto[prop]]);
  }
  return array;
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí

  // var objReturn = [];  //---------------------------------------------------------------------------------------------------------------
  // for (let a in string) {
  //   //recorre cada letra del index del string puesto , y lo tranforma en letra de string(a)

  //   if (objReturn[string(a)] === undefined) {
  //     // si es indefinido lo agrega , con la clave segun la letra y el numero 1
  //     objReturn[string(a)] = 1;
  //   } else objReturn[string(a)] += 1; // si NO esta indefinido , le suma 1 a el valor de la clave y lo guarda en la clave
  // }
  // return objReturn; // retorna el objeto

  var obj = {};
  for (i = 0; i < string.length; i++) {
    // recorremos cada letra que nos presenta
    if (obj[string[i]]) {
      obj[string[i]] += 1; // si esa propiedad se llama igual que el elemento , por lo que al valor de esa propiedad le vamos a aumentar +1
    } else {
      obj[string[i]] = 1; // pero si no tiene una propiedad que se llame así entonces solo le creará como valor =1
    }
  }
  return obj;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  // for (let a in s) {
  //   if (esMayuscula(s[a])) {
  //     parteEnMayuscula += s[a];
  //   } // si es minuscula o mayuscula va para un lado o para el otro
  //   else {
  //     parteEnMinuscula += s[a];
  //   }
  // }
  // function esMayuscula(letra) {
  //   return letra === letra.toUpperCase(); // si Letra es mayuscula te tira true y si no tira false
  // }

  var min = "";
  var may = "";

  for (i = 0; i < s.length; i++) {
    if (s[i].toUpperCase() === s[i]) {
      may += s[i];
    } else {
      min += s[i];
    }
  }
  return may + min;
}

function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  // var acumuladorDepalabras = "";
  // var fraseFinalRetornada = "";

  // for (let a in str) {
  //   if (str[a] === " ") {
  //     // Una ves que hay un espacio agrega a la salida acumulada invertida , y borra la palabra acumulada para reutilizarla/ cambiarla
  //     fraseFinalRetornada += invertirPalabra(acumuladorDepalabras) + " ";
  //     acumuladorDepalabras = "";
  //   } else {
  //     acumuladorDepalabras += str[a];
  //     if (parseInt(a, 10) === str.lenght - 1) {
  //       fraseFinalRetornada += invertirPalabra(acumuladorDepalabras); // Si ademas de ser una letra , es la ultima del string  , agrega la palabra a la salida
  //     }
  //   }
  // }

  // function invertirPalabra(txt) {
  //   return str.split("").reverse().join("");
  // }

  // return fraseFinalRetornada;
  var mirror = "";
  for (let i = str.length - 1; i >= 0; i--) {
    mirror += str[i]; // vamos a tener todo el string con todas sus letras invertidas
  }
  var array = mirror.split(" "); //asi que ese string lo vamos a hacer un array con espacios entre palabras , por lo que seria todo el string invertido separado palabra por palabra por guiones
  //ej: pasa de estar todo junto "!esolc si ..." a ("!esolc" , "si" , "...")
  return array.reverse().join(" "); // por lo que llegamos a que el primer array se convierta en el ultimo , osea , te inverte el orden de los elementos dentro de un array 
  //y por ultimo uno todas las palabras con un espacio depormedio
}

function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  // if (num === num.split("").reverse().join(" ")) {
  //   return "Es capicua";
  // } else {
  //   return "No es capicua";
  // }
  var num = numero.toString();
  for (let i = 0; i < num.length / 2; i++) {
    if (num[i] !== num[num.length - 1 - [i]]) {
      return "No es capicua";
    }
  }
  return "Es capicua";
}

function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var exclude = ["a", "b", "c"];
  var newString = "";
  for (let i = 0; i < cadena.length; i++) {
    //Recorre cada string de la cadena
    if (!exclude.includes(cadena[i])) {
      // si no incluye el string exclude en la cadena , que lo incluya a la cadena
      newString += cadena[i];
    }
  }
  return newString; // si lo incluye que remplace por nada
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  for (let i = 0; i < arr.length; i++) {
    //["You", "are", "beautiful", "looking"]
    //i=0     i=1     i=2         i=3
    var temp = arr[i];
    var j = i - 1;
    while (j >= 0 && temp.length < arr[j].length) {
      // te compara el "looking" es menor a "Beautiful" , respuesta true
      arr[j + 1] = arr[j]; //posicion j+1 osea "looking" va a ser igual a "beatiful"
      j--; // descuento una unidad , por lo que vuelve a verificar con el anterior y no vuelve al while =>>>
    }
    arr[j + 1] = temp; // ==>>>> por lo que pone lo que tenia guardado en temp , osea "looking"
  }
  return arr; // y por ultimo retorna el array entero
}

function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  var inter = [];
  for (let i = 0; i < arreglo1.length; i++) {
    if (arreglo2.includes(arreglo1[i])) {
      // si arreglo2 incluye el elemento de posicion de arreglo1
      inter.push(arreglo1[i]); // que saque un array en comun de los dos y lo incluya en el resultado
      // pero si es falso no retornara nada o undefined
    }
  }
  return inter;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
