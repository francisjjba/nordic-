import { counter } from './app';

class Animal{
    makeSound(){
        return "bow bow "
    }
}

const animal=new Animal();
console.log(animal.makeSound());

const add = (a, b) => a + b; 

console.log(add(1,2));
console.log(counter());

counter();