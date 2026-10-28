function fibonacci(n){

 if (!Number.isInteger(n) || n < 0) {
    throw new RangeError('solo números enteros >= 0');
}
 if (n === 0) {
        return 0;
    }

 if(n === 1){
    return 1;
 }

    return fibonacci(n-1) + fibonacci(n-2);
    
}

function esPinValido(pin){
    if(pin === null || pin === undefined)
        return false;
    if(pin === '')
        return false;
    if(typeof(pin) !== 'string' || !/^\d+$/.test(pin))
        return false;
    if (pin.length !== 4 && pin.length !== 6)
        return false;
    if (/^(\d)\1+$/.test(pin)) {
        return false
    }

    return true;
}

export{
    fibonacci,
    esPinValido
};