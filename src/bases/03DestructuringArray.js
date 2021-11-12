//Nuestro arreglo con personajes
const personajes= ['Superman', 'Wolverine', 'Aquaman', 'Batman', 'Flash'];

//Destructurando personajes
const [s, w, a, b, f] = personajes;
const [s1, w1, a1, b1, f1, linterna='No tiene valor'] = personajes;

console.log(linterna); //Imprimiendo valor de la destructuraci{on}

//Construimos nuestra funcion que devuelve un arreglo
const getPersonaje=()=>{
    return ['ABC',32];
}

const [letter, number]= getPersonaje(); //Destructurando a partir de mi función
console.log(letter);