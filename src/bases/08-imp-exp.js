import { heroes } from '../data/heroes';


// console.log(heroes);


// const getHeroeById = (id) => {
//     return heroes.find( ( heroe ) => {
//         if( heroe.id === id){
//             return true;
//         } else {
//             return false;
//         }
//     });
// }

export const getHeroeById = (id) => heroes.find(  (heroe)  => heroe.id === id);


// console.log(getHeroeById(2));


export const getHeroesByOwner = (owner) => heroes.filter(  (heroe)  => heroe.owner === owner);
// console.log(getHeroesByOwner('DC'));



