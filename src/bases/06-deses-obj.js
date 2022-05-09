

// Desestructuración
// Asignación Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 40,
    clave: 'Iroman'
};

const { nombre, edad, clave } = persona;


// console.log(nombre);
// console.log(edad);
// console.log(clave);

const retornaPersona = ( { clave, nombre, edad, rango = 'Capitan'} ) => {

    // console.log(nombre, edad, rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 1233123213,
            lng: - 123121233
        }
    }

};

const {nombreClave, anios, latlng:{lat, lng}} = retornaPersona(persona);

console.log( nombreClave, anios );
console.log( lat, lng );
