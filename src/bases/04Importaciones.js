import heroes from "./data/heroes";
import {getHeroeById, getHeroesByOwners} from "./data/heroes"

const getHeroeById=(id)=>heroes1.find((heroe)=>heroe.id === id);


const getHeroesByOwners=(owner)=>heroes1.filter((heroe)=>heroe.owner === owner);

console.log(getHeroeById(1));

console.log(getHeroesByOwners('Marvel'));