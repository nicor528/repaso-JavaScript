if (8 > 7) {
    console.log("8 es mayor que 7");
}else{
    console.log("8 no es mayor que 7");
}

//operador ternario
const resultado = 8 > 7 ? "8 es mayor que 7" : "8 no es mayor que 7";
console.log(resultado);

//switch
const dia = "lunes";

switch (dia) {
    case "lunes":
        console.log("Hoy es lunes");
        break;
    case "martes":
        console.log("Hoy es martes");
        break;
    default:
        console.log("No es lunes ni martes");
}

//if anidado
const edad = 20;

if (edad >= 18) {
    console.log("Eres mayor de edad");
    if (edad >= 21) {
        console.log("Puedes beber alcohol");
    } else {
        console.log("No puedes beber alcohol");
    }
} else {
    console.log("Eres menor de edad");
}

//if else if
const hora = 14;

if (hora < 12) {
    console.log("Buenos días");
} else if (hora < 18) {
    console.log("Buenas tardes");
} else {
    console.log("Buenas noches");
}

//operadores logicos
const esEstudiante = true;
const tieneBeca = false;

if (esEstudiante && tieneBeca) {
    console.log("Eres estudiante y tienes beca");
} else if (esEstudiante || tieneBeca) {
    console.log("Eres estudiante o tienes beca");
} else {
    console.log("No eres estudiante ni tienes beca");
}

//operador logico NOT
const esMayorDeEdad = true;

if (!esMayorDeEdad) {
    console.log("Eres menor de edad");
} else {
    console.log("Eres mayor de edad");
}