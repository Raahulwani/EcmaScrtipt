class Animal {
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    speak() {
        console.log(`${this.name} barks. it is a ${this.breed}.`);
    }
}

const animal = new Animal("Generic Animal");
animal.speak();
const dog = new Dog("Buddy", "Golden Retriever");
dog.speak();