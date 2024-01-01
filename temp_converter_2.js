// simple temperature converter

function toKelvin(x) {
    // converts kelvin to celsius
    if (typeof x === 'string'){
        return;
    }

    else if (typeof x === 'boolean'){
        return;
    }

    return x + 273.15 + "K";
}

function toCelsius(F) {
    if (typeof F === 'string'){
        return;
    }

    else if (typeof F === 'boolean'){
        return;
    }

    return (F - 32) * (5/9) + "F";
}

function toFahrenheit(C) {
    if (typeof C === 'string'){
        return;
    }

    else if (typeof x === 'boolean'){
        return;
    }
    
    return ((9/5) * C) + 32 + "C";
}
