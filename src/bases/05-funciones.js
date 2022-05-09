
// Funciones en JS
const saludar = function(nombre) {
    return `Hola ${ nombre }`;
}

const saludar2 = (nombre) => {
    return `Hola ${ nombre }`;
}

const saludar3 = (nombre) => `Hola ${ nombre }`;
const saludar4 = () => `Hola Mundo`;

console.log( saludar2('Brucee') );
console.log( saludar3('Tony') );
console.log( saludar4());

const getUser = () => {
    return {
        uid: 'ABC1234',
        username: 'Serial2'
    }
}

console.log( getUser());


//Tarea
// 1. Transformar a una funcion de flecha - LISTO
//2. Tiene quue retornar un objeto implicito
//3. pruebas
/** function getUsuarioActivo(nombre) {
    return {
        idu:'ABC123',
        username: nombre
    }
}

const usuarioActivo = getUsuarioActivo('Luis');
console.log(usuarioActivo);
**/

const getUsuario = (nombre) => (
    {
        uid: 'ABC1234',
        username: nombre
    });


const usuarioActivo = getUsuario('Luis');
console.log( usuarioActivo );
