

const persona = {
    nombre: 'Jesus',
    apellido: 'Morales',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 516031
    }

};


// Para mostrar el resultado en un tipo tabla | console.table( {persona} );

//Asignacion de referencia
const persona2 = persona;


//Clonacion de persona con todas sus caracteristicas.
const persona3 = {...persona};


persona2.nombre = 'Bruce'
persona3.nombre = 'Peter';

//Se muta el valor de persona
console.log( persona );
console.log( persona2 );
console.log( persona3 );