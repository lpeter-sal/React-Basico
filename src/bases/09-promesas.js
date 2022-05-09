import  { getHeroeById }  from './bases/08-imp-exp';



// const promesa = new Promise( (resolve, reject) => {
//     setTimeout(() => {

//         const heroe = getHeroeById(2);
//         resolve(heroe);

//     }, 2000 );
// });


// promesa.then( (heroe) => {
//     console.log('El Heroe', heroe);
// })



const getHeroeByIdAsync = ( id ) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {

            const heroe = getHeroeById( id );
            if(!heroe){
                reject('No se pudo encontrar el heroe');
            } else {
                resolve(heroe);
            }
    
        }, 2000 );
    });
    
}

getHeroeByIdAsync(2)
                    .then( console.log)
                    .catch(console.warn);

