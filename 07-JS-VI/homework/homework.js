// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  // nombre[0] = nombre[0].toUpperCase();
  return nombre[0].toUpperCase() + nombre.substring(1);
  //return nombre[0].toUpperCase() + nombre.slice(1); // slice: copia del string , empieze en 1 hasta el final
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  return cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  cb(n1, n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  var sumar = 0;
  for (let i = 0; i < numeros.length; i++) {
    sumar += numeros[i];
  }
  cb(sumar);

  // cb(
  //   numeros.reduce(function (acc, el) {
  //     acc += el;
  //     return acc;
  //   })
  // );
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:

  array.forEach(function (elemento) {
    cb(elemento);
  });
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  var nuevoArray = array.map(function (elemento) {
    return cb(elemento); // para cada uno de los elementos
  });

  return nuevoArray;
  // map te crea un array y por cada elemento del array te va a ejecutar algo , y ese valor nuevo te lo va a pushear del cb en el array
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  return array.filter(function (elemento) {
    return elemento[0] === "a";
  });
// filer es retornar todos los elementos conjutnos de un array que den "true" a la sentencia que yo dicte

  // te va a filtrar todos los elementos , y con una condicion te va a retornar true
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter,
};
