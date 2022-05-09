

const personajes = ['Batman', 'Superman', 'Guason'];


const [ , , p3  ] = personajes;

console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);


//Tarea
//1. primer valor del arreglo se llamrá nombre
//2. se llamara setnombre
const state = ( valor ) => {
    return [valor, () =>{ console.log('Hola Mundo')}];

}


const [nombre, setNombre] = state('Jorge');

console.log(nombre);
setNombre();
