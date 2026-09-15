
console.log("Hola, Node.js!!"); // Muestra un mensaje en la consola
let edad1 =20;
let edad2 = 11;

console.log("Edad Promedio: "); // Muestra la edad 1 en la consola
console.log((edad1 + edad2) / 2); // Muestra la edad 2 en la consola   

/* Medir tiempo de un proceso  */
console.time("miProceso"); // Inicia el temporizador
for (let i = 0; i < 100000000; i++) { }
console.timeEnd("miProceso"); // Finaliza el temporizador y muestra el tiempo transcurrido
