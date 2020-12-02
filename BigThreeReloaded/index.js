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
    
    return highNum;
}