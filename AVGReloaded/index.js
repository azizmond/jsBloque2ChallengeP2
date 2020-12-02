function receiveNums(number){
    const numbers = [];
    for(let i = 0; i < number; i++){
        const load = parseInt(prompt("Ingrese un número"));
        numbers.push(load);
    }
    return numbers;
}

function avgReloaded(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    let avg = sum / 3;
    return avg;
}