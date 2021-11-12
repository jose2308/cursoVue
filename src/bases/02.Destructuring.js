const heroe={
    name: 'Heroe 1',
    age: 32, 
    direccion: 'direccion1',
    money: false
}


const generateHeroe=({name, age, direccion, money=true})=>({id:324354,name,age,direccion, money})


let myHeroe= generateHeroe(heroe);

console.log(myHeroe);