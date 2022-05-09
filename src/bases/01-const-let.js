
// Variables y Constantes

const nombre = 'Pedro';
const apellido = 'Salvador';

let valorDado = 5;

valorDado = 3;


console.log(nombre, apellido, valorDado);


if (true){
    //Variables de scope; este valor solo va existir en este ambito
    let valorDado = 6;

    console.log(valorDado);
}


console.log(valorDado);