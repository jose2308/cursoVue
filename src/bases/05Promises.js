import {getHeroeById} from './data/heroes';


const getHeroeByIdAsync=(id)=>{
    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            const myHeroe=getHeroeById(id);
           return myHeroe != undefined ? resolve(myHeroe) : reject('No se encontró el heroe');
        },1000);
    });

}

getHeroeByIdAsync(1)
    .then(response=>console.log(response))
    .catch(error=>console.log(error));