function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) { //callback llama a una funcion
    return callback(num1, num2);
};

console.log(calc(2, 2, sum)); //funcion calc pone el argumentos num1 / num2 y que funcion va a realizar.

setTimeout (function() {
    console.log('Hola JavaScript');
}, 5000)

function gretting (name) {
    console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000, 'Mati'); 
//se ejecuta la funcion setTimeout,los argumentos que necesita es la funcion
// que vamos a ejecutar, el tiempo 2000(2") 
//y los argumentos que necesita para que se ejecute la funcion