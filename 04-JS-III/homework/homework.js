// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  return array.map(function (elemento) {
    return (elemento += 1);
  });

  return array;

  // var nuevoArray= []
  // for(var i =0 ;i<array.length;i++){
  //   nuevoArray[i]===array[i] + 1
  // }
  // return nuevoArray
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var string = "";

  palabras.forEach(function (elemento, indice) {
    if (!(indice === palabras.length - 1)) string += elemento + " ";
    else return (string += elemento);
  });

  return string;
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array" --------------------------------------------------------------------------------------------------------------------------------
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  //--------------------------------------------
  // if (
  //   array.reduce(function (acc, elementoDelArray) {
  //     return (acc *= elemento === elementoDelArray);
  //   }, true) === 1
  // ) {
  //   return true;
  // } else return false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === elemento) {
      return true;
    }
  }
  return false;
}

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0;
  numeros.forEach(function (numero) {
    suma += numero;
  });
  return suma;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

  var suma = 0;
  resultadosTest.forEach(function (resultadosTest) {
    suma += resultadosTest;
  });
  return suma / resultadosTest.length; // se suma todos los numeros y lo divido por 2 para sacar promedio
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  return Math.max.apply(null, numeros);
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto-------------------------------------------------------------------------------
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  //
  // var producto = [];
  // for (let f = 0; f < producto.length; f++) {
  //   if (producto[f] != 0) {
  //     total = producto[f] * total;
  //   }
  //   return total;
  // }
  // --------------------------
  // if (arguments.length < 0) {
  //   return "0";
  // } else if (arguments.length === 1) {
  //   return arguments[0];
  // }
  // var mult = 1;
  // for (var i = 0; i < arguments.length; i++) {
  //   mult = mult * arguments[i];
  // }
  // return mult;
  var acc = 1;
  if (arguments.length === 0) return 0;
  else if (arguments.length === 1) return arguments[0];
  for (var i = 0; i < arguments.length; i++) {
    acc *= arguments[i];
  }
  return acc;
}

function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  // var obj = {};
  // for (i = 0; i < arreglo.length; i++) {
  //   // recorremos cada letra que nos presenta
  //   if (obj[arreglo[i]] > 18) {
  //     obj[arreglo[i]] += 1; // si esa propiedad se llama igual que el elemento , por lo que al valor de esa propiedad le vamos a aumentar +1
  //   }
  // }
  // return obj;
  var elemnt = [];
  for (var i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 18) {
      elemnt++;
    }
  }
  return elemnt;
}

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
  //Escribe tu código aquí
  //
  //SABADO =7 , DOMINGO =1  , LUNES =2 , MARTES =3 , MIERCOLES =4 , JUEVES =5 , VIERNES =6

  if (
    numeroDeDia < 7 &&
    numeroDeDia > 1 &&
    numeroDeDia !== 1 &&
    numeroDeDia !== 7
  ) {
    return "Es dia Laboral";
  } else {
    return "Es fin de semana";
  }
}

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí

  // for (let i = 0; i < n.lenght; i++) {
  //   if (n.includes("9")) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  var numero = n.toString(); // convertimos el numero en si en un string y luego le decimos si 0 , osea el inicio , empieza con el "string" 9 entonces retorna true , si no es asi false
  if (numero[0] === "9") {
    return true;
  } else return false;
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  //   var repetido = false;
  //   for (var i = 0; i < arreglo.length; i++) {
  //     for (var j = 0; j < arreglo.length; j++) {
  //       if (arreglo[i] == arreglo[j] && i != j) {
  //         //revisamos que i sea diferente de j, para que no compare el mismo elemento exacto.
  //         repetido = true;
  //       }
  //     }
  //   }
  //---------------------------------------------------------
  // if (
  //   arreglo.unique().every(function (v, i) {
  //     return v === arreglo[i];
  //   })
  // )
  //   return true;
  // else return false;

  for (var i = 0; i < arreglo.length; i++) {
    if (arreglo[i] === arreglo[i + 1]) {
      return true;
    }
    return false;
  }

  // var primero=arreglo[0]
  // for(var i=0;i<arreglo.length;i++){
  //   if(primero!==arreglo[i]) return false
  // }
  // return true
}

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  //
  // var nuevoArray = [] , contador = 0;
  // for (var i = 0; i < array.length; i++) {
  //   if (
  //     array[i] === "Enero" ||
  //     array[i] === "Marzo" ||
  //     array[i] === "Noviembre"
  //   ) {
  //     nuevoArray.push(array[i]);
  //     contador = contador + 1;
  //   }
  // }
  //------------------------------------------------------------------------(mal)
  // var buscando = ["Enero", "Marzo", "Noviembre"];
  // var encontrados = [];
  // var noencontrados = [];

  // for (let i = 0; i < array.length; i++) {
  //   if (array.includes(buscando[i])) {
  //     encontrados.push(buscando[i]);
  //   } else {
  //     noencontrados.push(buscando[i]);
  //   }
  // }
  // if (encontrados.length !== 0) {
  //   return encontrados;
  // } else {
  //   return "No se encontraron los meses pedidos";
  // }

  var meses = [];
  for (var i = 0; i < array.length; i++) {
    if (
      array[i] === "Enero" ||
      array[i] === "Marzo" ||
      array[i] === "Noviembre"
    ) {
      meses.push(array[i]);
    }
  }
  if (meses.length < 3) {
    return "No se encontraron los meses pedidos";
  } else return meses;
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var mayoresacien = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      mayoresacien.push(array[i]);
    }
  }
  return mayoresacien;
}

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var original = numero;
  var array = [];
  for (var i = 0; i < 10; i++) {
    if (original === i) {
      break;
    } // si dejamos solo el return "Se inter..." cuando de true , a JS no le importaria lo de abajo
    original += 2; // el break cortaria el bucle y lo dejaria en el if debajo
    array.push(original);
  }
  if (i < 10) {
    return "Se interrumpió la ejecución";
  }
  return array;
}

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var original = numero;
  var array = [];
  for (var i = 0; i < 10; i++) {
    if (i === 5) {
      continue;
    }
    original += 2;
    array.push(original);
  }
  return array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement,
};
