function plusX5(number){
    const numbers = [];
    for(let i = 0; i < number; i++){
        const load = parseInt(prompt("Ingrese un número"));
        numbers.push(load);
    }
    return numbers;
};

const sumNumber = (numbers) => {
    let plus = 0;
    for(let i = 0; i < numbers.length; i++){
        plus += numbers[i];
    }
    return plus;
};