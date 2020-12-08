/*const primerArray = (a) => {
    const datosPrimero = [];
    for(let i = 0; i < a; i++){
        const cargarVector = prompt("Ingrese los datos del vector");
        datosPrimero.push(cargarVector);
    }
    console.log(datosPrimero);
    return (datosPrimero);
};

const segundoArray = (a) => {
    const datosSegundo = [];
    for(let i = 0; i < a; i++){
        const cargarVector = prompt("Ingrese los datos del vector");
        datosSegundo.push(cargarVector);
    }
    console.log(datosSegundo);
    return (datosSegundo);
};

const final = (datosPrimero, datosSegundo) => {
    const vectorFinal = [];
    for(let i = 0; i < datosPrimero.length; i++){
        vectorFinal.push(datosPrimero[i]);
    }
    for (let i = 0; i < datosSegundo.length; i++) {
        vectorFinal.push(datosSegundo[i]);
    }
    console.log(vectorFinal);
    return vectorFinal;
};*/

const primerArray = (a) => {
    const datosPrimero = [];
    for (let i = 0; i < a; i++) {
        const cargarVector = prompt("Ingrese los datos del vector");
        datosPrimero.push(cargarVector);
    }
    console.log(datosPrimero);
    return (datosPrimero);
};

const segundoArray = (a) => {
    const datosSegundo = [];
    for (let i = 0; i < a; i++) {
        const cargarVector = prompt("Ingrese los datos del vector");
        datosSegundo.push(cargarVector);
    }
    console.log(datosSegundo);
    return (datosSegundo);
};

const final = (datosPrimero, datosSegundo) => {
    //const vectorFinal = [...datosPrimero, ...datosSegundo];

    //ACÁ TE FALTÓ DECLARACIÓN DE VARIABLE DE VECTOR FINAL (LA COMENTASTE EN LA LINEA ANTERIOR CON EL SPREAD SYNTAX)
    let vectorFinal = []
    for (let i = 0; i < datosPrimero.length; i++) {
        vectorFinal.push(datosPrimero[i]);
    }
    for (let i = 0; i < datosSegundo.length; i++) {
        vectorFinal.push(datosSegundo[i]);
    }
    console.log(vectorFinal);
    return vectorFinal;
};
