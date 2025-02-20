class Pet {
    name: string = 'Some pet'
    age: number = -1
    speak() {
        return "No speak. I am fish!";
    }
}

class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
        return "Miyau!";
    }
}

function printPetInfo<T extends Pet>(pet: T): void {
    console.log(`Pet name -> ${pet.name}`);
    console.log(`Pet age -> ${pet.age}`);
    console.log(`Pet speak: \"${pet.speak()}\"\n`);
}

const myDog = new Dog();
const myCat = new Cat();

printPetInfo(myDog);
printPetInfo(myCat);