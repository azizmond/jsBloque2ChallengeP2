function mensaje(){
    document.write("Hola funcion 🤣");
}

function saludarUsuario(nombre){
    document.write(`Bienvenido/a ${nombre}`);
}

function mostrarPares(vector){
    if(typeof vector === "object"){
        const pares = [];
        for(let i = 0; i < vector.length; i++){
            vector[i] % 2 === 0 ? pares.push(vector[i]) : null; //one line condition => es cómo un if
        }
    }
    console.log(pares);
}

function bigThree(number){
    const numbers = [];
    for(let i = 0; i < number; i++){
        const load = parseInt(prompt("Ingrese un número"));
        numbers.push(load);
    }
    return numbers;
}

function highNumber(numbers){
    let highNum = 0;
    for(let i = 0; i < numbers.length; i++){
        numbers[i] > highNum ? highNum = numbers[i] : null;
    }
    console.log(highNum);
}